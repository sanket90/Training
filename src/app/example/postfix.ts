import * as util from './util';
import { ListStack } from '../data-structure/stack';

export class Postfix {
    private postfix: string
    private stack: ListStack<string>;

    fromInfix(infix: string): string {
        this.postfix = ""
        this.stack = new ListStack<string>()

        let eqArr = util.toArray(infix)
        eqArr.forEach(char => this.do(char));

        this.popUntillNotEmptry()

        return this.postfix
    }

    private do = (char) => {
        switch (char) {
            case util.isOperand(char):
                this.postfix.concat(char);
                break;

            case util.isOpeningBracket(char):
                this.stack.push(char);
                break;

            case util.isClosingBracket(char):
                this.processClosingBracket();
                break;

            default:
                this.processOperator(char)
                break;
        }
    }

    private processClosingBracket() {
        while (!this.stack.isEmpty() && !util.isOpeningBracket(this.stack.peek())) this.postfix.concat(this.stack.pop())
        this.stack.pop()
    }

    private processOperator(char) {
        while (!this.stack.isEmpty() && util.precedence(char) <= util.precedence(this.stack.peek())) {
            this.postfix.concat(this.stack.pop())
        }
        this.stack.push(char)
    }

    private popUntillNotEmptry() { while (!this.stack.isEmpty()) this.postfix.concat(this.stack.pop()) }
}