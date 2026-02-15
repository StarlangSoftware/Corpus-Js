"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.TurkishChecker = void 0;
const TurkishLanguage_1 = require("nlptoolkit-dictionary/dist/Language/TurkishLanguage");
const Console = __importStar(require("console"));
class TurkishChecker {
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
//# sourceMappingURL=TurkishChecker.js.map