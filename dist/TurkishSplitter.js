(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./SentenceSplitter", "nlptoolkit-dictionary/dist/Language/TurkishLanguage"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.TurkishSplitter = void 0;
    const SentenceSplitter_1 = require("./SentenceSplitter");
    const TurkishLanguage_1 = require("nlptoolkit-dictionary/dist/Language/TurkishLanguage");
    class TurkishSplitter extends SentenceSplitter_1.SentenceSplitter {
        /**
         * Returns Turkish lowercase letters.
         * @return Turkish lowercase letters.
         */
        lowerCaseLetters() {
            return TurkishLanguage_1.TurkishLanguage.LOWERCASE_LETTERS;
        }
        /**
         * Returns shortcut words in Turkish language.
         * @return Shortcut words in Turkish language.
         */
        shortCuts() {
            return ["alb", "bnb", "bkz", "bşk", "co", "dr", "dç", "der", "em", "gn",
                "hz", "kd", "kur", "kuv", "ltd", "md", "mr", "mö", "muh", "müh",
                "no", "öğr", "op", "opr", "org", "sf", "tuğ", "uzm", "vb", "vd",
                "yön", "yrb", "yrd", "üniv", "fak", "prof", "dz", "yd", "krm", "gen",
                "pte", "p", "av", "II", "III", "IV", "VI", "VII", "VIII", "IX",
                "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX",
                "XX", "tuğa", "plt", "tğm", "tic", "srv", "bl", "dipl", "not", "min",
                "cul", "san", "rzv", "or", "kor", "tüm", "st", "sn", "fr", "pl",
                "ka", "tk", "ko", "vs", "yard", "bknz", "doç", "gör", "müz", "oyn",
                "m", "s", "kr", "ms", "hv", "uz", "re", "ph", "mc", "ed",
                "km", "yb", "bk", "jr", "bn", "os", "mrs", "bld", "sen", "alm",
                "sir", "ord", "dir", "yay", "man", "brm", "edt", "dec", "mah", "cad",
                "vol", "kom", "sok", "apt", "elk", "mad", "ort", "cap", "ste", "exc",
                "ef"];
        }
        /**
         * Returns Turkish UPPERCASE letters.
         * @return Turkish UPPERCASE letters.
         */
        upperCaseLetters() {
            return TurkishLanguage_1.TurkishLanguage.UPPERCASE_LETTERS;
        }
    }
    exports.TurkishSplitter = TurkishSplitter;
});
//# sourceMappingURL=TurkishSplitter.js.map