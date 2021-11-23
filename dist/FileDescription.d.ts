export declare class FileDescription {
    private readonly path;
    private readonly extension;
    private index;
    constructor(path: string, extension: string, index?: number);
    getPath(): string;
    getIndex(): number;
    getExtension(): string;
    private stringFormatted;
    getFileName(thisPath?: string, thisIndex?: number, extension?: string): string;
    getFileNameWithExtension(extension: string): string;
    getRawFileName(): string;
    addToIndex(count: number): void;
    nextFileExists(count: number, thisPath?: string): boolean;
    previousFileExists(count: number, thisPath?: string): boolean;
}
