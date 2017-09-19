import { ListStack } from '../data-structure/stack';

export class Postfix {
    private postfix: string
    private stack: ListStack<string>;

    fromInfixToPostfix(infix: string): string {
        this.postfix = ""
        this.stack = new ListStack<string>()

        let eqArr = this.toArray(infix)
        eqArr.forEach(char => this.do(char));

        this.popUntillNotEmptry()

        return this.postfix
    }

    private do = (char) => {
        switch (char) {
            case this.isOperand(char):
                this.postfix.concat(char);
                break;

            case this.isOpeningBracket(char):
                this.stack.push(char);
                break;

            case this.isClosingBracket(char):
                this.processClosingBracket();
                break;

            default:
                this.processOperator(char)
                break;
        }
    }

    private toArray(eqn: string) { return Array.from(eqn) }

    private isOperand(char): boolean { return /^[a-zA-Z0-9]+$/i.test(char) }

    private isOpeningBracket(char): boolean { return char === "(" }

    private isClosingBracket(char): boolean { return char === ")" }

    private processClosingBracket() {
        while (!this.stack.isEmpty() && this.stack.peek() != "(") this.postfix.concat(this.stack.pop())
        this.stack.pop()
    }

    private processOperator(char) {
        while (!this.stack.isEmpty() && this.precedence(char) <= this.precedence(this.stack.peek())) {
            this.postfix.concat(this.stack.pop())
        }
        this.stack.push(char)
    }

    private precedence(char): number {
        switch (char) {
            case '+':
            case '-':
                return 1;
            case '*':
            case '/':
                return 2;
            case '^':
                return 3;
            default:
                return -1;
        }
    }

    private popUntillNotEmptry() { while (!this.stack.isEmpty()) this.postfix.concat(this.stack.pop()) }
}