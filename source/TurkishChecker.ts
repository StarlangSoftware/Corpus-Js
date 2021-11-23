import {LanguageChecker} from "./LanguageChecker";
import {TurkishLanguage} from "nlptoolkit-dictionary/dist/Language/TurkishLanguage";
import * as Console from "console";

export class TurkishChecker implements LanguageChecker{

    SEPARATORS = "()[]{}\"'\u05F4\uFF02\u055B";
    SENTENCE_ENDERS = ".?!…";
    PUNCTUATION_CHARACTERS = ",:;";

    /**
     * The isValidWord method takes an input String as a word than define all valid characters as a validCharacters String which has
     * letters (abcçdefgğhıijklmnoöprsştuüvyzABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ),
     * extended language characters (âàáäãèéêëíîòóôûúqwxÂÈÉÊËÌÒÛQWX),
     * digits (0123456789),
     * separators ({@literal ()[]{}"'״＂՛}),
     * sentence enders (.?!…),
     * arithmetic chars (+-/=\*),
     * punctuation chars (,:;),
     * special-meaning chars
     * <p>
     * Then, loops through input word's each char and if a char in word does not in the validCharacters string it returns
     * false, true otherwise.
     *
     * @param word String to check validity.
     * @return true if each char in word is valid, false otherwise.
     */
    isValidWord(word: string): boolean {
        let specialMeaningCharacters = "$\\_|@%#£§&><";
        let validCharacters = TurkishLanguage.LETTERS + TurkishLanguage.EXTENDED_LANGUAGE_CHARACTERS + TurkishLanguage.DIGITS + this.SEPARATORS + this.SENTENCE_ENDERS + TurkishLanguage.ARITHMETIC_CHARACTERS + this.PUNCTUATION_CHARACTERS + specialMeaningCharacters;
        for (let i = 0; i < word.length; i++) {
            if (!validCharacters.includes("" + word.charAt(i))) {
                Console.log(word.charAt(i));
                return false;
            }
        }
        return true;
    }

}