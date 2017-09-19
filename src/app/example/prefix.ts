import * as util from './util';
import { Postfix } from './postfix';

export class Prefix {

    fromInfix(infix: string): string {
        let reverseInfix = util.reverse(infix)
        let eqArr = util.toArray(reverseInfix)
        let size = eqArr.length
        for (let i = 0; i < size; i++) {
            const char = eqArr[i]
            if (util.isOpeningBracket(char)) eqArr[i] = ")"
            if (util.isClosingBracket(char)) eqArr[i] = "("
        }
        reverseInfix = eqArr.join("")

        let postfix = new Postfix().fromInfix(reverseInfix)

        let prefix = util.reverse(postfix)
        return prefix
    }
}