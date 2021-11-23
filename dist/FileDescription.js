(function (factory) {
    if (typeof module === "object" && typeof module.exports === "object") {
        var v = factory(require, exports);
        if (v !== undefined) module.exports = v;
    }
    else if (typeof define === "function" && define.amd) {
        define(["require", "exports", "fs"], factory);
    }
})(function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.FileDescription = void 0;
    const fs = require("fs");
    class FileDescription {
        constructor(path, extension, index) {
            if (index == undefined) {
                this.path = path;
                this.extension = extension.substring(extension.lastIndexOf(".") + 1);
                this.index = Number.parseInt(extension.substring(0, extension.lastIndexOf(".")));
            }
            else {
                this.path = path;
                this.extension = extension;
                this.index = index;
            }
        }
        getPath() {
            return this.path;
        }
        getIndex() {
            return this.index;
        }
        getExtension() {
            return this.extension;
        }
        stringFormatted(index) {
            if (index < 10) {
                return "000" + index.toString();
            }
            else {
                if (index < 100) {
                    return "00" + index.toString();
                }
                else {
                    if (index < 1000) {
                        return "0" + index.toString();
                    }
                    else {
                        return index.toString();
                    }
                }
            }
        }
        getFileName(thisPath = this.path, thisIndex = this.index, extension = this.extension) {
            return thisPath + "/" + this.stringFormatted(thisIndex) + "." + extension;
        }
        getFileNameWithExtension(extension) {
            return this.getFileName(this.path, this.index, extension);
        }
        getRawFileName() {
            return this.stringFormatted(this.index) + "." + this.extension;
        }
        addToIndex(count) {
            this.index += count;
        }
        nextFileExists(count, thisPath = this.path) {
            return fs.existsSync(this.getFileName(thisPath, this.index + count));
        }
        previousFileExists(count, thisPath = this.path) {
            return fs.existsSync(this.getFileName(thisPath, this.index - count));
        }
    }
    exports.FileDescription = FileDescription;
});
//# sourceMappingURL=FileDescription.js.map