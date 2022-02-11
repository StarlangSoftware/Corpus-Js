import {SentenceSplitter} from "./SentenceSplitter";
import {EnglishLanguage} from "nlptoolkit-dictionary/dist/Language/EnglishLanguage";

export class EnglishSplitter extends SentenceSplitter {

    lowerCaseLetters(): string {
        return EnglishLanguage.LOWERCASE_LETTERS
    }

    shortCuts(): Array<string> {
        return ["dr", "prof", "org", "II", "III", "IV", "VI", "VII", "VIII", "IX",
            "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX",
            "XX", "min", "km", "jr", "mrs", "sir"]
    }

    upperCaseLetters(): string {
        return EnglishLanguage.UPPERCASE_LETTERS
    }
}