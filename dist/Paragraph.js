"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Paragraph = void 0;
class Paragraph {
    sentences = new Array();
    /**
     * A constructor of {@link Paragraph} class which creates an {@link Array} sentences.
     */
    constructor() {
    }
    /**
     * The addSentence method adds given sentence to sentences {@link Array}.
     *
     * @param s Sentence type input to add sentences.
     */
    addSentence(s) {
        this.sentences.push(s);
    }
    /**
     * The sentenceCount method finds the size of the {@link Array} sentences.
     *
     * @return the size of the {@link Array} sentences.
     */
    sentenceCount() {
        return this.sentences.length;
    }
    /**
     * The getSentence method finds the sentence from sentences {@link Array} at given index.
     *
     * @param index used to get a sentence.
     * @return sentence at given index.
     */
    getSentence(index) {
        return this.sentences[index];
    }
}
exports.Paragraph = Paragraph;
//# sourceMappingURL=Paragraph.js.map