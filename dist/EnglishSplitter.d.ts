import { SentenceSplitter } from "./SentenceSplitter";
export declare class EnglishSplitter extends SentenceSplitter {
    /**
     * Returns English lowercase letters.
     * @return English lowercase letters.
     */
    lowerCaseLetters(): string;
    /**
     * Returns shortcut words in English language.
     * @return Shortcut words in English language.
     */
    shortCuts(): Array<string>;
    /**
     * Returns English UPPERCASE letters.
     * @return English UPPERCASE letters.
     */
    upperCaseLetters(): string;
}
