export function reverse(str) { return str.split('').reverse().join('') }

export function toArray(eqn: string) { return Array.from(eqn) }

export function isOperand(char): boolean { return /^[a-zA-Z0-9]+$/i.test(char) }

export function isOpeningBracket(char): boolean { return char === "(" }

export function isClosingBracket(char): boolean { return char === ")" }

export function precedence(char): number {
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