import * as assert from "assert";
import {EnglishSplitter} from "../dist/EnglishSplitter";

describe('EnglishSplitterTest', function() {
    describe('EnglishSplitterTest', function() {
        it('testSplit', function() {
            let splitter = new EnglishSplitter();
            assert.deepStrictEqual(11, splitter.split("Firstly ,I like travelling to see new places. Such as museums ,restaurant\n" +
                "and art historical. I like travelling because I am a curious person and I\n" +
                "always wonder history of their country.I go on museums when I travelling so\n" +
                "I can see learn about their  history. I like travelling because , I can\n" +
                " learn their food culture ,and different flavours . Such as last year I\n" +
                "went to go Spain. I went to a lot of  restaurants,its very delicious then\n" +
                "I go to, Dali museum. It was very beautiful.I learned a lot of new art\n" +
                "historical about Spain.\n" +
                "\n" +
                "To sum up , travelling so good for me. People I learning a history,\n" +
                "culture, food culture ,art culture also  new people.").length);
        });
    });
});
