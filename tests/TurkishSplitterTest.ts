import * as assert from "assert";
import {TurkishSplitter} from "../dist/TurkishSplitter";

describe('TurkishSplitterTest', function() {
    describe('TurkishSplitterTest', function() {
        let splitter = new TurkishSplitter();
        it('testSplit1', function() {
            assert.deepStrictEqual(14, splitter.split("Cin Ali, bak! " +
                "At. " +
                "Bak, Cin Ali, bak. " +
                "Bu at. " +
                "Baba, o atı bana al. " +
                "Cin Ali, bu at. " +
                "O da ot. " +
                "Baba, bu ata ot al. " +
                "Cin Ali, bu ot, o da at. " +
                "Otu al, ata ver. " +
                "Bak, Suna! " +
                "Cin Ali, ata ot verdi. " +
                "Su verdi. " +
                "Cin Ali, ata bir kova da su verdi.").length);
        });
        it('testSplit2', function() {
            assert.deepStrictEqual(1, splitter.split("WWW.GOOGLE.COM").length);
        });
        it('testSplit3', function() {
            assert.deepStrictEqual(1, splitter.split("www.google.com").length);
        });
        it('testSplit4', function() {
            assert.deepStrictEqual(1, splitter.split("1.adımda ve 2.adımda ne yaptın").length);
            assert.deepStrictEqual(7, splitter.split("1.adımda ve 2.adımda ne yaptın")[0].wordCount());
        });
        it('testSplit5', function() {
            assert.deepStrictEqual(1, splitter.split("1. adımda ve 2. adımda ne yaptın").length);
            assert.deepStrictEqual(7, splitter.split("1. adımda ve 2. adımda ne yaptın")[0].wordCount());
        });
        it('testSplit6', function() {
            assert.deepStrictEqual(1, splitter.split("Burada II. Murat ve I. Ahmet oyun oynadı").length);
            assert.deepStrictEqual(8, splitter.split("Burada II. Murat ve I. Ahmet oyun oynadı")[0].wordCount());
        });
        it('testSplit7', function() {
            assert.deepStrictEqual(1, splitter.split("1.87 cm boyunda ve 84 kg ağırlığındaydı").length);
            assert.deepStrictEqual(7, splitter.split("1.87 cm boyunda ve 84 kg ağırlığındaydı")[0].wordCount());
        });
    });
});
