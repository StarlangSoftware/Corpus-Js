import {SentenceSplitter} from "./SentenceSplitter";
import {EnglishLanguage} from "nlptoolkit-dictionary/dist/Language/EnglishLanguage";

export class EnglishSplitter extends SentenceSplitter {

    /**
     * Returns English lowercase letters.
     * @return English lowercase letters.
     */
    lowerCaseLetters(): string {
        return EnglishLanguage.LOWERCASE_LETTERS
    }

    /**
     * Returns shortcut words in English language.
     * @return Shortcut words in English language.
     */
    shortCuts(): Array<string> {
        return ["dr", "prof", "org", "II", "III", "IV", "VI", "VII", "VIII", "IX",
            "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX",
            "XX", "min", "km", "jr", "mrs", "sir"]
    }

    /**
     * Returns English UPPERCASE letters.
     * @return English UPPERCASE letters.
     */
    upperCaseLetters(): string {
        return EnglishLanguage.UPPERCASE_LETTERS
    }
}