(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-dictionary/dist/Language/TurkishLanguage", "console"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TurkishChecker = void 0;
    const TurkishLanguage_1 = require("nlptoolkit-dictionary/dist/Language/TurkishLanguage");
    const Console = require("console");
    class TurkishChecker {
        constructor() {
            this.SEPARATORS = "()[]{}\"'\u05F4\uFF02\u055B";
            this.SENTENCE_ENDERS = ".?!…";
            this.PUNCTUATION_CHARACTERS = ",:;";
        }
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
        isValidWord(word) {
            let specialMeaningCharacters = "$\\_|@%#£§&><";
            let validCharacters = TurkishLanguage_1.TurkishLanguage.LETTERS + TurkishLanguage_1.TurkishLanguage.EXTENDED_LANGUAGE_CHARACTERS + TurkishLanguage_1.TurkishLanguage.DIGITS + this.SEPARATORS + this.SENTENCE_ENDERS + TurkishLanguage_1.TurkishLanguage.ARITHMETIC_CHARACTERS + this.PUNCTUATION_CHARACTERS + specialMeaningCharacters;
            for (let i = 0; i < word.length; i++) {
                if (!validCharacters.includes("" + word.charAt(i))) {
                    Console.log(word.charAt(i));
                    return false;
                }
            }
            return true;
        }
    }
    exports.TurkishChecker = TurkishChecker;
});
//# sourceMappingURL=TurkishChecker.js.map