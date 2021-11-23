(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "nlptoolkit-dictionary/dist/Dictionary/Word"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Sentence = void 0;
    const Word_1 = require("nlptoolkit-dictionary/dist/Dictionary/Word");
    class Sentence {
        /**
         * Another constructor of {@link Sentence} class with two inputs; a String sentence and a {@link LanguageChecker}
         * languageChecker. It parses a sentence by " " and then check the language considerations. If it is a valid word,
         * it adds this word to the newly created {@link Array} words.
         *
         * @param sentence        String input.
         * @param languageChecker {@link LanguageChecker} type input.
         */
        constructor(sentence, languageChecker) {
            this.words = new Array();
            if (sentence != undefined) {
                let wordArray = sentence.split(" ");
                for (let word of wordArray) {
                    if (word != "") {
                        if (languageChecker != undefined) {
                            if (languageChecker.isValidWord(word)) {
                                this.words.push(new Word_1.Word(word));
                            }
                        }
                        else {
                            this.words.push(new Word_1.Word(word));
                        }
                    }
                }
            }
        }
        /**
         * The getWord method takes an index input and gets the word at that index.
         *
         * @param index is used to get the word.
         * @return the word in given index.
         */
        getWord(index) {
            return this.words[index];
        }
        /**
         * The getWords method returns the {@link Array} words.
         *
         * @return words ArrayList.
         */
        getWords() {
            return this.words;
        }
        /**
         * The getStrings method loops through the words {@link Array} and adds each words' names to the newly created
         * {@link Array} result.
         *
         * @return result ArrayList which holds names of the words.
         */
        getStrings() {
            let result = new Array();
            for (let word of this.words) {
                result.push(word.getName());
            }
            return result;
        }
        /**
         * The getIndex method takes a word as an input and finds the index of that word in the words {@link Array} if it exists.
         *
         * @param word Word type input to search for.
         * @return index of the found input, -1 if not found.
         */
        getIndex(word) {
            let i = 0;
            for (let w of this.words) {
                if (w.getName() == word.getName()) {
                    return i;
                }
                i++;
            }
            return -1;
        }
        /**
         * The wordCount method finds the size of the words {@link Array}.
         *
         * @return the size of the words {@link Array}.
         */
        wordCount() {
            return this.words.length;
        }
        /**
         * The addWord method takes a word as an input and adds this word to the words {@link Array}.
         *
         * @param word Word to add words {@link Array}.
         */
        addWord(word) {
            this.words.push(word);
        }
        /**
         * The charCount method finds the total number of chars in each word of words {@link Array}.
         *
         * @return number of the chars in the whole sentence.
         */
        charCount() {
            let sum = 0;
            for (let word of this.words) {
                sum += word.charCount();
            }
            return sum;
        }
        /**
         * The insertWord method takes an index and a word as inputs. It inserts the word at given index to words
         * {@link Array}.
         *
         * @param i       index.
         * @param newWord to add the words {@link Array}.
         */
        insertWord(i, newWord) {
            this.words.splice(i, 0, newWord);
        }
        /**
         * The replaceWord method takes an index and a word as inputs. It removes the word at given index from words
         * {@link Array} and then adds the given word to given index of words.
         *
         * @param i       index.
         * @param newWord to add the words {@link Array}.
         */
        replaceWord(i, newWord) {
            this.words.splice(i, 1, newWord);
        }
        /**
         * The safeIndex method takes an index as an input and checks whether this index is between 0 and the size of the
         * words.
         *
         * @param index is used to check the safety.
         * @return true if an index is safe, false otherwise.
         */
        safeIndex(index) {
            return index >= 0 && index < this.words.length;
        }
        /**
         * The overridden toString method returns an accumulated string of each word in words {@link Array}.
         *
         * @return String result which has all the word in words {@link Array}.
         */
        toString() {
            if (this.words.length > 0) {
                let result = this.words[0].toString();
                for (let i = 1; i < this.words.length; i++) {
                    result = result + " " + this.words[i].toString();
                }
                return result;
            }
            else {
                return "";
            }
        }
        /**
         * The toWords method returns an accumulated string of each word's names in words {@link Array}.
         *
         * @return String result which has all the names of each item in words {@link Array}.
         */
        toWords() {
            if (this.words.length > 0) {
                let result = this.words[0].getName();
                for (let i = 1; i < this.words.length; i++) {
                    result = result + " " + this.words[i].getName();
                }
                return result;
            }
            else {
                return "";
            }
        }
    }
    exports.Sentence = Sentence;
});
//# sourceMappingURL=Sentence.js.map