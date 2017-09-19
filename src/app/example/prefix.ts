import { Postfix } from './postfix';

class Prefix {
    fromInfixToPostfix(infix: string): string {
        let reverseInfix = this.reverse(infix)
        let eqArr = this.toArray(infix)
        eqArr.forEach(char => this.do(char));
        reverseInfix = eqArr.join()

        let postfix = new Postfix().fromInfixToPostfix(reverseInfix)

        let prefix = this.reverse(postfix)
        return prefix
    }

    private do = (char) => {
        if (this.isOpeningBracket(char)) char = ")"
        if (this.isClosingBracket(char)) char = "("
    }

    private reverse(str) { return str.split('').reverse().join('') }

    private toArray(eqn: string) { return Array.from(eqn) }

    private isOpeningBracket(char): boolean { return char === "(" }

    private isClosingBracket(char): boolean { return char === ")" }
}