import * as util from './util';
import { Postfix } from './postfix';

class Prefix {
    fromInfix(infix: string): string {
        let reverseInfix = util.reverse(infix)
        let eqArr = util.toArray(infix)
        eqArr.forEach(char => this.do(char));
        reverseInfix = eqArr.join()

        let postfix = new Postfix().fromInfix(reverseInfix)

        let prefix = util.reverse(postfix)
        return prefix
    }

    private do = (char) => {
        if (util.isOpeningBracket(char)) char = ")"
        if (util.isClosingBracket(char)) char = "("
    }
}