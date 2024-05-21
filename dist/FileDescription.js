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
                this.constructor1(path, extension);
            }
            else {
                this.constructor2(path, extension, index);
            }
        }
        /**
         * Constructor for the FileDescription object. FileDescription object is used to store sentence or tree file names
         * in a format of path/index.extension such as 'trees/0123.train' or 'sentences/0002.test'. At most 10000 file names
         * can be stored for an extension.
         * @param path Path of the file
         * @param fileName Raw file name of the string without path name, including the index of the file and the
         *                    extension. For example 0023.train, 3456.test, 0125.dev, 0000.train etc.
         */
        constructor1(path, fileName) {
            this.path = path;
            this.extension = fileName.substring(fileName.lastIndexOf(".") + 1);
            this.index = Number.parseInt(fileName.substring(0, fileName.lastIndexOf(".")));
        }
        /**
         * Another constructor for the FileDescription object. FileDescription object is used to store sentence or tree
         * file names in a format of path/index.extension such as 'trees/0123.train' or 'sentences/0002.test'. At most 10000
         * file names can be stored for an extension.
         * @param path Path of the file
         * @param extension Extension of the file such as train, test, dev etc.
         * @param index Index of the file, should be larger than or equal to 0 and less than 10000. 123, 0, 9999, etc.
         */
        constructor2(path, extension, index) {
            this.path = path;
            this.extension = extension;
            this.index = index;
        }
        /**
         * Accessor for the path attribute.
         * @return Path
         */
        getPath() {
            return this.path;
        }
        /**
         * Accessor for the index attribute.
         * @return Index
         */
        getIndex() {
            return this.index;
        }
        /**
         * Accessor for the extension attribute.
         * @return Extension
         */
        getExtension() {
            return this.extension;
        }
        /**
         * Converts the file number to a 4 character string by embedding leading zeros.
         * @param index File number
         * @return File number as a string with leading zeros
         */
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
        /**
         * Returns the filename with path, index, and extension are replaced with the given path, index, and extension.
         * @param thisPath New path
         * @param thisIndex New Index
         * @param extension New extension
         * @return The filename with path, index, and extension are replaced with the given path, index, and extension.
         */
        getFileName(thisPath = this.path, thisIndex = this.index, extension = this.extension) {
            return thisPath + "/" + this.stringFormatted(thisIndex) + "." + extension;
        }
        /**
         * Returns the filename with extension replaced with the given extension.
         * @param extension New extension
         * @return The filename with extension replaced with the given extension.
         */
        getFileNameWithExtension(extension) {
            return this.getFileName(this.path, this.index, extension);
        }
        /**
         * Returns only the filename without path as 'index.extension'.
         * @return File name without path as 'index.extension'.
         */
        getRawFileName() {
            return this.stringFormatted(this.index) + "." + this.extension;
        }
        /**
         * Increments index by count
         * @param count Count to be incremented
         */
        addToIndex(count) {
            this.index += count;
        }
        /**
         * Checks if the next file (found by changing the path and adding count to the index) exists or not. Returns true
         * if it exists, false otherwise.
         * @param thisPath New path
         * @param count Count to be incremented.
         * @return Returns true, if the next file (found by changing the path and adding count to the index) exists,
         * false otherwise.
         */
        nextFileExists(count, thisPath = this.path) {
            return fs.existsSync(this.getFileName(thisPath, this.index + count));
        }
        /**
         * Checks if the previous file (found by changing the path and subtracting count from the index) exists or not.
         * Returns true  if it exists, false otherwise.
         * @param thisPath New path
         * @param count Count to be decremented.
         * @return Returns true, if the previous file (found by changing the path and subtracting count to the index)
         * exists, false otherwise.
         */
        previousFileExists(count, thisPath = this.path) {
            return fs.existsSync(this.getFileName(thisPath, this.index - count));
        }
    }
    exports.FileDescription = FileDescription;
});
//# sourceMappingURL=FileDescription.js.map