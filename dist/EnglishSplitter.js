(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./SentenceSplitter", "nlptoolkit-dictionary/dist/Language/EnglishLanguage"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.EnglishSplitter = void 0;
    const SentenceSplitter_1 = require("./SentenceSplitter");
    const EnglishLanguage_1 = require("nlptoolkit-dictionary/dist/Language/EnglishLanguage");
    class EnglishSplitter extends SentenceSplitter_1.SentenceSplitter {
        /**
         * Returns English lowercase letters.
         * @return English lowercase letters.
         */
        lowerCaseLetters() {
            return EnglishLanguage_1.EnglishLanguage.LOWERCASE_LETTERS;
        }
        /**
         * Returns shortcut words in English language.
         * @return Shortcut words in English language.
         */
        shortCuts() {
            return ["dr", "prof", "org", "II", "III", "IV", "VI", "VII", "VIII", "IX",
                "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX",
                "XX", "min", "km", "jr", "mrs", "sir"];
        }
        /**
         * Returns English UPPERCASE letters.
         * @return English UPPERCASE letters.
         */
        upperCaseLetters() {
            return EnglishLanguage_1.EnglishLanguage.UPPERCASE_LETTERS;
        }
    }
    exports.EnglishSplitter = EnglishSplitter;
});
//# sourceMappingURL=EnglishSplitter.js.map