import * as assert from "assert";
import {Word} from "nlptoolkit-dictionary/dist/Dictionary/Word";
import {Sentence} from "../dist/Sentence";

describe('SentenceTest', function() {
    describe('SentenceTest', function() {
        let sentence = new Sentence("ali topu at mehmet ayşeyle gitti");
        it('testGetWord', function() {
            assert.deepStrictEqual(new Word("ali"), sentence.getWord(0));
            assert.deepStrictEqual(new Word("at"), sentence.getWord(2));
            assert.deepStrictEqual(new Word("gitti"), sentence.getWord(5));
        });
        it('testGetIndex', function() {
            assert.deepStrictEqual(0, sentence.getIndex(new Word("ali")));
            assert.deepStrictEqual(2, sentence.getIndex(new Word("at")));
            assert.deepStrictEqual(5, sentence.getIndex(new Word("gitti")));
        });
        it('testWordCount', function() {
            assert.deepStrictEqual(6, sentence.wordCount());
        });
        it('testCharCount', function() {
            assert.deepStrictEqual(27, sentence.charCount());
        });
    });
});
