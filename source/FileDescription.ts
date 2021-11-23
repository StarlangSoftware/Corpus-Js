import * as fs from "fs";

export class FileDescription {

    private readonly path: string
    private readonly extension: string
    private index: number

    constructor(path: string, extension: string, index?: number) {
        if (index == undefined){
            this.path = path
            this.extension = extension.substring(extension.lastIndexOf(".") + 1)
            this.index = Number.parseInt(extension.substring(0, extension.lastIndexOf(".")))
        } else {
            this.path = path
            this.extension = extension
            this.index = index
        }
    }

    getPath(): string{
        return this.path
    }

    getIndex(): number{
        return this.index
    }

    getExtension(): string{
        return this.extension
    }

    private stringFormatted(index: number): string{
        if (index < 10){
            return "000" + index.toString()
        } else {
            if (index < 100){
                return "00" + index.toString()
            } else {
                if (index < 1000){
                    return "0" + index.toString()
                } else {
                    return index.toString()
                }
            }
        }
    }

    getFileName(thisPath: string = this.path, thisIndex: number = this.index, extension: string = this.extension){
        return thisPath + "/" + this.stringFormatted(thisIndex) + "." + extension;
    }

    getFileNameWithExtension(extension: string){
        return this.getFileName(this.path, this.index, extension)
    }

    getRawFileName(): string{
        return this.stringFormatted(this.index) + "." + this.extension
    }

    addToIndex(count: number){
        this.index += count
    }

    nextFileExists(count: number, thisPath: string = this.path): boolean{
        return fs.existsSync(this.getFileName(thisPath, this.index + count))
    }

    previousFileExists(count: number, thisPath: string = this.path): boolean{
        return fs.existsSync(this.getFileName(thisPath, this.index - count))
    }

}