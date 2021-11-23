import { Paragraph } from "./Paragraph";
import { Sentence } from "./Sentence";
import { CounterHashMap } from "nlptoolkit-datastructure/dist/CounterHashMap";
import { Word } from "nlptoolkit-dictionary/dist/Dictionary/Word";
import { SentenceSplitter } from "./SentenceSplitter";
import { LanguageChecker } from "./LanguageChecker";
export declare class Corpus {
    protected paragraphs: Array<Paragraph>;
    protected sentences: Array<Sentence>;
    protected wordList: CounterHashMap<string>;
    protected fileName: string;
    /**
     * Another constructor of {@link Corpus} class which takes {@link SentenceSplitter}  as an input besides the file name.
     * It reads input file line by line and calls the sentenceSplitter method with each line, then calls addSentence method
     * with each sentence.
     *
     * @param fileName         String file name input that will be read.
     * @param splitterOrChecker {@link SentenceSplitter} type input.
     */
    constructor(fileName?: string, splitterOrChecker?: SentenceSplitter | LanguageChecker);
    /**
     * The combine method takes a {@link Corpus} as an input and adds each sentence of sentences {@link Array}.
     *
     * @param corpus {@link Corpus} type input.
     */
    combine(corpus: Corpus): void;
    /**
     * The addSentence method takes a Sentence as an input. It adds given input to sentences {@link Array} and loops
     * through the each word in sentence and puts these words into wordList {@link CounterHashMap}.
     *
     * @param s Sentence type input that will be added to sentences {@link Array} and its words will be added
     * to wordList {@link CounterHashMap}.
     */
    addSentence(s: Sentence): void;
    /**
     * The numberOfWords method loops through the sentences {@link Array} and accumulates the number of words
     * in sentence.
     *
     * @return size which holds the total number of words.
     */
    numberOfWords(): Number;
    /**
     * The contains method takes a String word as an input and checks whether wordList {@link CounterHashMap} has the
     * given word and returns true if so, otherwise returns false.
     *
     * @param word String input to check.
     * @return true if wordList has the given word, false otherwise.
     */
    contains(word: string): boolean;
    /**
     * The addParagraph method takes a {@link Paragraph} type input. It gets the sentences in the given paragraph and
     * add these to the sentences {@link Array} and the words in the sentences to the wordList {@link CounterHashMap}.
     *
     * @param p {@link Paragraph} type input to add sentences and wordList.
     */
    addParagraph(p: Paragraph): void;
    /**
     * Getter for the file name.
     *
     * @return file name.
     */
    getFileName(): string;
    /**
     * Getter for the wordList.
     *
     * @return the keySet of wordList.
     */
    getWordList(): IterableIterator<string>;
    /**
     * The wordCount method returns the size of the wordList {@link CounterHashMap}.
     *
     * @return the size of the wordList {@link CounterHashMap}.
     */
    wordCount(): number;
    /**
     * The getCount method returns the count value of given word.
     *
     * @param word Word type input to check.
     * @return the count value of given word.
     */
    getCount(word: Word): number;
    /**
     * The sentenceCount method returns the size of the sentences {@link Array}.
     *
     * @return the size of the sentences {@link Array}.
     */
    sentenceCount(): number;
    /**
     * Getter for getting a sentence at given index.
     *
     * @param index to get sentence from.
     * @return the sentence at given index.
     */
    getSentence(index: number): Sentence;
    /**
     * The paragraphCount method returns the size of the paragraphs {@link Array}.
     *
     * @return the size of the paragraphs {@link Array}.
     */
    paragraphCount(): number;
    /**
     * Getter for getting a paragraph at given index.
     *
     * @param index to get paragraph from.
     * @return the paragraph at given index.
     */
    getParagraph(index: number): Paragraph;
    /**
     * The maxSentenceLength method finds the sentence with the maximum number of words and returns this number.
     *
     * @return maximum length.
     */
    maxSentenceLength(): number;
    /**
     * The getAllWordsAsArrayList method creates new {@link Array} of ArrayLists and adds each word in each sentence
     * of sentences {@link Array} into new {@link Array}.
     *
     * @return newly created and populated {@link Array}.
     */
    getAllWordsAsArrayList(): Array<Array<Word>>;
    /**
     * The shuffleSentences method randomly shuffles sentences {@link Array} with given seed value.
     *
     * @param seed value to randomize shuffling.
     */
    shuffleSentences(seed: number): void;
    /**
     * The getTrainCorpus method takes two integer inputs foldNo and foldCount for determining train data size and count of fold respectively.
     * Initially creates a new empty Corpus, then finds the sentenceCount as N. Then, starting from the index 0 it loops through
     * the index (foldNo * N) / foldCount and add each sentence of sentences {@link Array} to new Corpus. Later on,
     * starting from the index ((foldNo + 1) * N) / foldCount, it loops through the index N and add each sentence of
     * sentences {@link Array} to new Corpus.
     *
     * @param foldNo    Integer input for train set size.
     * @param foldCount Integer input for counting fold.
     * @return the newly created and populated Corpus.
     */
    getTrainCorpus(foldNo: number, foldCount: number): Corpus;
    /**
     * The getTestCorpus method takes two integer inputs foldNo and foldCount for determining test data size and count of
     * fold respectively. Initially creates a new empty Corpus, then finds the sentenceCount as N.
     * Then, starting from the index (foldNo * N) / foldCount it loops through the index ((foldNo + 1) * N) / foldCount and
     * add each sentence of sentences {@link Array} to new Corpus.
     *
     * @param foldNo    Integer input for test size.
     * @param foldCount Integer input counting fold.
     * @return the newly created and populated Corpus.
     */
    getTestCorpus(foldNo: number, foldCount: number): Corpus;
    /**
     * The allSubStrings method takes a Word and an integer as inputs. If the length of the word's name is less than
     * given input k, it concatenates the each word's name with {@literal </s>} and adds to result which starts with
     * {@literal <s>}. Else,  it finds out the substring, concatenates with {@literal </s>} and adds to the
     * String result.
     *
     * @param word Word type input to find substrings.
     * @param k    Integer for substring length.
     * @return String result that has all substrings.
     */
    allSubStrings(word: Word, k: number): string;
}
