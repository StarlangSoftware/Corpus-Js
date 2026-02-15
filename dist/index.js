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
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
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
//# sourceMappingURL=index.js.map