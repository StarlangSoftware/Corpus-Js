import * as assert from "assert";
import {Corpus} from "../dist/Corpus";
import {Word} from "nlptoolkit-dictionary/dist/Dictionary/Word";

describe('CorpusTest', function() {
    describe('CorpusTest', function() {
        let corpus = new Corpus("corpus.txt");
        let simpleCorpus = new Corpus("simplecorpus.txt");
        it('testNumberOfWords', function() {
            assert.strictEqual(826680, corpus.numberOfWords());
            assert.strictEqual(24, simpleCorpus.numberOfWords());
        });
        it('testContains', function() {
            assert.ok(simpleCorpus.contains("mehmet"));
            for (let word of simpleCorpus.getWordList()){
                assert.ok(simpleCorpus.contains(word));
            }
            assert.ok(corpus.contains("atatürk"));
            for (let word of corpus.getWordList()){
                assert.ok(corpus.contains(word));
            }
        });
        it('testWordCount', function() {
            assert.strictEqual(98199, corpus.wordCount());
            assert.strictEqual(12, simpleCorpus.wordCount());
        });
        it('testGetCount', function() {
            assert.strictEqual(309, corpus.getCount(new Word("mustafa")));
            assert.strictEqual(109, corpus.getCount(new Word("kemal")));
            assert.strictEqual(122, corpus.getCount(new Word("atatürk")));
            assert.strictEqual(4, simpleCorpus.getCount(new Word("ali")));
            assert.strictEqual(3, simpleCorpus.getCount(new Word("gitti")));
            assert.strictEqual(4, simpleCorpus.getCount(new Word("at")));
        });
        it('testSentenceCount', function() {
            assert.strictEqual(50000, corpus.sentenceCount());
            assert.strictEqual(5, simpleCorpus.sentenceCount());
        });
        it('testMaxSentenceLength', function() {
            assert.strictEqual(1092, corpus.maxSentenceLength());
            assert.strictEqual(6, simpleCorpus.maxSentenceLength());
        });
    });
});