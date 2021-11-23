import { Sentence } from "./Sentence";
export declare abstract class SentenceSplitter {
    abstract split(line: string): Array<Sentence>;
}
