import { LanguageChecker } from "./LanguageChecker";
export declare class TurkishChecker implements LanguageChecker {
    SEPARATORS: string;
    SENTENCE_ENDERS: string;
    PUNCTUATION_CHARACTERS: string;
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
    isValidWord(word: string): boolean;
}
