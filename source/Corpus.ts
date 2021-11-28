import {Paragraph} from "./Paragraph";
import {Sentence} from "./Sentence";
import {CounterHashMap} from "nlptoolkit-datastructure/dist/CounterHashMap";
import {Word} from "nlptoolkit-dictionary/dist/Dictionary/Word";
import {SentenceSplitter} from "./SentenceSplitter";
import * as fs from "fs";
import {LanguageChecker} from "./LanguageChecker";

export class Corpus {

    protected paragraphs: Array<Paragraph> = new Array<Paragraph>()
    protected sentences: Array<Sentence> = new Array<Sentence>()
    protected wordList: CounterHashMap<string> = new CounterHashMap<string>()
    protected fileName: string

    /**
     * Another constructor of {@link Corpus} class which takes {@link SentenceSplitter}  as an input besides the file name.
     * It reads input file line by line and calls the sentenceSplitter method with each line, then calls addSentence method
     * with each sentence.
     *
     * @param fileName         String file name input that will be read.
     * @param splitterOrChecker {@link SentenceSplitter} type input.
     */
    constructor(fileName: string = undefined, splitterOrChecker: SentenceSplitter | LanguageChecker = undefined) {
        if (fileName != undefined){
            this.fileName = fileName
            let data = fs.readFileSync(fileName, 'utf8')
            let lines = data.split("\n")
            for (let line of lines){
                if (splitterOrChecker == undefined){
                    this.addSentence(new Sentence(line))
                } else {
                    if (splitterOrChecker instanceof SentenceSplitter){
                        let sentences = splitterOrChecker.split(line);
                        let paragraph = new Paragraph();
                        for (let s of sentences) {
                            paragraph.addSentence(s);
                        }
                        this.addParagraph(paragraph);
                    } else {
                        if (splitterOrChecker instanceof LanguageChecker){
                            this.addSentence(new Sentence(line, splitterOrChecker))
                        }
                    }
                }
            }
        }
    }

    /**
     * The combine method takes a {@link Corpus} as an input and adds each sentence of sentences {@link Array}.
     *
     * @param corpus {@link Corpus} type input.
     */
    combine(corpus: Corpus){
        for (let sentence of corpus.sentences) {
            this.addSentence(sentence);
        }
    }

    /**
     * The addSentence method takes a Sentence as an input. It adds given input to sentences {@link Array} and loops
     * through the each word in sentence and puts these words into wordList {@link CounterHashMap}.
     *
     * @param s Sentence type input that will be added to sentences {@link Array} and its words will be added
     * to wordList {@link CounterHashMap}.
     */
    addSentence(s: Sentence){
        this.sentences.push(s);
        for (let i = 0; i < s.wordCount(); i++) {
            let w = s.getWord(i);
            this.wordList.put(w.getName());
        }
    }

    /**
     * The numberOfWords method loops through the sentences {@link Array} and accumulates the number of words
     * in sentence.
     *
     * @return size which holds the total number of words.
     */
    numberOfWords(): number{
        let size = 0;
        for (let s of this.sentences) {
            size += s.wordCount();
        }
        return size;
    }

    /**
     * The contains method takes a String word as an input and checks whether wordList {@link CounterHashMap} has the
     * given word and returns true if so, otherwise returns false.
     *
     * @param word String input to check.
     * @return true if wordList has the given word, false otherwise.
     */
    contains(word: string): boolean{
        return this.wordList.has(word);
    }

    /**
     * The addParagraph method takes a {@link Paragraph} type input. It gets the sentences in the given paragraph and
     * add these to the sentences {@link Array} and the words in the sentences to the wordList {@link CounterHashMap}.
     *
     * @param p {@link Paragraph} type input to add sentences and wordList.
     */
    addParagraph(p: Paragraph){
        this.paragraphs.push(p);
        for (let i = 0; i < p.sentenceCount(); i++){
            this.addSentence(p.getSentence(i));
        }
    }

    /**
     * Getter for the file name.
     *
     * @return file name.
     */
    getFileName(): string{
        return this.fileName
    }

    /**
     * Getter for the wordList.
     *
     * @return the keySet of wordList.
     */
    getWordList(): IterableIterator<string>{
        return this.wordList.keys()
    }

    /**
     * The wordCount method returns the size of the wordList {@link CounterHashMap}.
     *
     * @return the size of the wordList {@link CounterHashMap}.
     */
    wordCount(): number{
        return this.wordList.size
    }

    /**
     * The getCount method returns the count value of given word.
     *
     * @param word Word type input to check.
     * @return the count value of given word.
     */
    getCount(word: Word): number{
        return this.wordList.get(word.getName())
    }

    /**
     * The sentenceCount method returns the size of the sentences {@link Array}.
     *
     * @return the size of the sentences {@link Array}.
     */
    sentenceCount(): number{
        return this.sentences.length
    }

    /**
     * Getter for getting a sentence at given index.
     *
     * @param index to get sentence from.
     * @return the sentence at given index.
     */
    getSentence(index: number): Sentence{
        return this.sentences[index]
    }

    /**
     * The paragraphCount method returns the size of the paragraphs {@link Array}.
     *
     * @return the size of the paragraphs {@link Array}.
     */
    paragraphCount(): number{
        return this.paragraphs.length
    }

    /**
     * Getter for getting a paragraph at given index.
     *
     * @param index to get paragraph from.
     * @return the paragraph at given index.
     */
    getParagraph(index: number): Paragraph{
        return this.paragraphs[index]
    }

    /**
     * The maxSentenceLength method finds the sentence with the maximum number of words and returns this number.
     *
     * @return maximum length.
     */
    maxSentenceLength(): number{
        let maxLength = 0;
        for (let s of this.sentences) {
            if (s.wordCount() > maxLength)
                maxLength = s.wordCount();
        }
        return maxLength;
    }

    /**
     * The getAllWordsAsArrayList method creates new {@link Array} of ArrayLists and adds each word in each sentence
     * of sentences {@link Array} into new {@link Array}.
     *
     * @return newly created and populated {@link Array}.
     */
    getAllWordsAsArrayList(): Array<Array<Word>>{
        let allWords = new Array<Array<Word>>()
        for (let i = 0; i < this.sentenceCount(); i++) {
            allWords.push(this.getSentence(i).getWords());
        }
        return allWords;
    }

    /**
     * The shuffleSentences method randomly shuffles sentences {@link Array} with given seed value.
     *
     * @param seed value to randomize shuffling.
     */
    shuffleSentences(seed: number){
        for (let i = this.sentences.length - 1; i > 0; i--){
            let randomIndex = Math.floor(Math.random() * (i + 1));
            [this.sentences[i], this.sentences[randomIndex]] =
                [this.sentences[randomIndex], this.sentences[i]];
        }
    }

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
    getTrainCorpus(foldNo: number, foldCount: number): Corpus{
        let trainCorpus = new Corpus();
        let N = this.sentenceCount();
        for (let i = 0; i < (foldNo * N) / foldCount; i++) {
            trainCorpus.addSentence(this.sentences[i]);
        }
        for (let i = ((foldNo + 1) * N) / foldCount; i < N; i++) {
            trainCorpus.addSentence(this.sentences[i]);
        }
        return trainCorpus;
    }

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
    getTestCorpus(foldNo: number, foldCount: number): Corpus{
        let testCorpus = new Corpus();
        let N = this.sentenceCount();
        for (let i = (foldNo * N) / foldCount; i < ((foldNo + 1) * N) / foldCount; i++) {
            testCorpus.addSentence(this.sentences[i]);
        }
        return testCorpus;
    }

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
    allSubStrings(word: Word, k: number): string{
        let result = "<s> ";
        if (word.getName().length < k) {
            result += word.getName() + " </s>\n";
        } else {
            result += word.getName().substring(0, k);
            for (let j = 1; j < word.charCount() - k + 1; j++) {
                result += " " + word.getName().substring(j, j + k);
            }
            result += " </s>\n";
        }
        return result;
    }
}