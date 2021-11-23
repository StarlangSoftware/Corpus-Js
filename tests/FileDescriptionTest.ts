import * as assert from "assert";
import {FileDescription} from "../dist/FileDescription";

describe('FileDescriptionTest', function() {
    describe('FileDescriptionTest', function() {
        it('testGetIndex', function() {
            let fileDescription = new FileDescription("mypath", "1234.train");
            assert.strictEqual(1234, fileDescription.getIndex());
            fileDescription = new FileDescription("mypath", "0000.test");
            assert.strictEqual(0, fileDescription.getIndex());
            fileDescription = new FileDescription("mypath", "0003.dev");
            assert.strictEqual(3, fileDescription.getIndex());
            fileDescription = new FileDescription("mypath", "0020.train");
            assert.strictEqual(20, fileDescription.getIndex());
            fileDescription = new FileDescription("mypath", "0304.dev");
            assert.strictEqual(304, fileDescription.getIndex());
        });
        it('testGetExtension', function() {
            let fileDescription = new FileDescription("mypath", "1234.train");
            assert.strictEqual("train", fileDescription.getExtension());
            fileDescription = new FileDescription("mypath", "0000.test");
            assert.strictEqual("test", fileDescription.getExtension());
            fileDescription = new FileDescription("mypath", "0003.dev");
            assert.strictEqual("dev", fileDescription.getExtension());
        });
        it('testGetFileName', function() {
            let fileDescription = new FileDescription("mypath", "0003.train");
            assert.strictEqual("mypath/0003.train", fileDescription.getFileName());
            assert.strictEqual("newpath/0003.train", fileDescription.getFileName("newpath"));
            assert.strictEqual("newpath/0000.train", fileDescription.getFileName("newpath", 0));
            assert.strictEqual("newpath/0020.train", fileDescription.getFileName("newpath", 20));
            assert.strictEqual("newpath/0103.train", fileDescription.getFileName("newpath", 103));
            assert.strictEqual("newpath/0000.dev", fileDescription.getFileName("newpath", 0, "dev"));
            assert.strictEqual("newpath/0020.dev", fileDescription.getFileName("newpath", 20, "dev"));
            assert.strictEqual("newpath/0103.dev", fileDescription.getFileName("newpath", 103, "dev"));
        });
    });
});
