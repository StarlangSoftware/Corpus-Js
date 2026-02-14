var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "./Corpus", "./FileDescription", "./LanguageChecker", "./Paragraph", "./Sentence", "./SentenceSplitter", "./TurkishChecker", "./TurkishSplitter", "./WordFormat"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    __exportStar(require("./Corpus"), exports);
    __exportStar(require("./FileDescription"), exports);
    __exportStar(require("./LanguageChecker"), exports);
    __exportStar(require("./Paragraph"), exports);
    __exportStar(require("./Sentence"), exports);
    __exportStar(require("./SentenceSplitter"), exports);
    __exportStar(require("./TurkishChecker"), exports);
    __exportStar(require("./TurkishSplitter"), exports);
    __exportStar(require("./WordFormat"), exports);
});
//# sourceMappingURL=index.js.map