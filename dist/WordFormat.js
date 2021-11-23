(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.WordFormat = void 0;
    var WordFormat;
    (function (WordFormat) {
        /**
         * Surface/Original form
         */
        WordFormat[WordFormat["SURFACE"] = 0] = "SURFACE";
        /**
         * Create 2-Gram words as output.
         */
        WordFormat[WordFormat["LETTER_2"] = 1] = "LETTER_2";
        /**
         * Create 3-Gram words as output.
         */
        WordFormat[WordFormat["LETTER_3"] = 2] = "LETTER_3";
        /**
         * Create 4-Gram words as output.
         */
        WordFormat[WordFormat["LETTER_4"] = 3] = "LETTER_4";
    })(WordFormat = exports.WordFormat || (exports.WordFormat = {}));
});
//# sourceMappingURL=WordFormat.js.map