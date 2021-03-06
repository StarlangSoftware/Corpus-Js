import * as assert from "assert";
import {TurkishSplitter} from "../dist/TurkishSplitter";

describe('TurkishSplitterTest', function() {
    describe('TurkishSplitterTest', function() {
        it('testSplit', function() {
            let splitter = new TurkishSplitter();
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
    });
});
