import {Sentence} from "./Sentence";

export abstract class SentenceSplitter {

    abstract split(line: string): Array<Sentence>;

}