import { SentenceSplitter } from "./SentenceSplitter";
export declare class TurkishSplitter extends SentenceSplitter {
    /**
     * Returns Turkish lowercase letters.
     * @return Turkish lowercase letters.
     */
    lowerCaseLetters(): string;
    /**
     * Returns shortcut words in Turkish language.
     * @return Shortcut words in Turkish language.
     */
    shortCuts(): Array<string>;
    /**
     * Returns Turkish UPPERCASE letters.
     * @return Turkish UPPERCASE letters.
     */
    upperCaseLetters(): string;
}
