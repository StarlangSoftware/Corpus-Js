import { Sentence } from "./Sentence";
export declare class Paragraph {
    private sentences;
    /**
     * A constructor of {@link Paragraph} class which creates an {@link Array} sentences.
     */
    constructor();
    /**
     * The addSentence method adds given sentence to sentences {@link Array}.
     *
     * @param s Sentence type input to add sentences.
     */
    addSentence(s: Sentence): void;
    /**
     * The sentenceCount method finds the size of the {@link Array} sentences.
     *
     * @return the size of the {@link Array} sentences.
     */
    sentenceCount(): number;
    /**
     * The getSentence method finds the sentence from sentences {@link Array} at given index.
     *
     * @param index used to get a sentence.
     * @return sentence at given index.
     */
    getSentence(index: number): Sentence;
}
