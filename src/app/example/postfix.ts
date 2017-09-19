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
        if (util.isOperand(char)) { this.appendToResult(char) }

        else if (util.isOpeningBracket(char)) { this.stack.push(char) }

        else if (util.isClosingBracket(char)) { this.processClosingBracket() }

        else { this.processOperator(char) }
    }

    private processClosingBracket() {
        while (!this.stack.isEmpty() && !util.isOpeningBracket(this.stack.peek())) this.appendToResult(this.stack.pop())
        this.stack.pop()
    }

    private processOperator(char) {
        while (!this.stack.isEmpty() && util.precedence(char) <= util.precedence(this.stack.peek())) {
            this.appendToResult(this.stack.pop())
        }
        this.stack.push(char)
    }

    private popUntillNotEmptry() { while (!this.stack.isEmpty()) this.appendToResult(this.stack.pop()) }

    private appendToResult(char) { this.postfix = this.postfix + char }
}