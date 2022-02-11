import { Sentence } from "./Sentence";
export declare abstract class SentenceSplitter {
    SEPARATORS: string;
    SENTENCE_ENDERS: string;
    PUNCTUATION_CHARACTERS: string;
    abstract shortCuts(): Array<string>;
    abstract lowerCaseLetters(): string;
    abstract upperCaseLetters(): string;
    /**
     * The listContains method has a String array shortcuts which holds the possible abbreviations that might end with a '.' but not a
     * sentence finisher word. It also takes a String as an input and loops through the shortcuts array and returns
     * true if given String has any matching item in the shortcuts array.
     *
     * @param currentWord String input to check.
     * @return true if contains any abbreviations, false otherwise.
     */
    private listContains;
    /**
     * The isNextCharUpperCaseOrDigit method takes a String line and an int i as inputs. First it compares each char in
     * the input line with " " and SEPARATORS ({@literal ()[]{}"'״＂՛}) and increment i by one until a mismatch or end of line.
     * <p>
     * When i equals to line length or contains one of the uppercase letters or digits it returns true, false otherwise.
     *
     * @param line String to check.
     * @param i    int defining starting index.
     * @return true if next char is uppercase or digit, false otherwise.
     */
    private isNextCharUpperCaseOrDigit;
    /**
     * The isPreviousWordUpperCase method takes a String line and an int i as inputs. First it compares each char in
     * the input line with " " and checks each char whether they are lowercase letters or one of the qxw. And decrement
     * input i by one till this condition is false.
     * <p>
     * When i equals to -1 or contains one of the uppercase letters or one of the QXW it returns true, false otherwise.
     *
     * @param line String to check.
     * @param i    int defining ending index.
     * @return true if previous char is uppercase or one of the QXW, false otherwise.
     */
    private isPreviousWordUpperCase;
    /**
     * The isNextCharUpperCase method takes a String line and an int i as inputs. First it compares each char in
     * the input line with " " and increment i by one until a mismatch or end of line.
     * <p>
     * When i equals to line length or contains one of the uppercase letters it returns true, false otherwise.
     *
     * @param line String to check.
     * @param i    int defining starting index.
     * @return true if next char is uppercase, false otherwise.
     */
    private isNextCharUpperCase;
    /**
     * The isNameShortcut method takes a String word as an input. First, if the word length is 1, and currentWord
     * contains UPPERCASE_LETTERS letters than it returns true.
     * <p>
     * Secondly, if the length of the word is 3 (i.e it is a shortcut) and it has a '.' at its 1st index and
     * currentWord's 2nd  index is an uppercase letter it also returns true. (Ex : m.A)
     *
     * @param currentWord String input to check whether it is a shortcut.
     * @return true if given input is a shortcut, false otherwise.
     */
    private isNameShortcut;
    /**
     * The repeatControl method takes a String word as an input, and a boolean exceptionMode and compress the repetitive chars. With
     * the presence of exceptionMode it directly returns the given word. Then it declares a counter i and loops till the end of the
     * given word. It compares the char at index i with the char at index (i+2) if they are equal then it compares the char at index i
     * with the char at index (i+1) and increments i by one and returns concatenated  result String with char at index i.
     *
     * @param word          String input.
     * @param exceptionMode boolean input for exceptional cases.
     * @return String result.
     */
    private repeatControl;
    /**
     * The isApostrophe method takes a String line and an integer i as inputs. Initially declares a String apostropheLetters
     * which consists of abcçdefgğhıijklmnoöprsştuüvyzABCÇDEFGĞHIİJKLMNOÖPRSŞTUÜVYZ, âàáäãèéêëíîòóôûúqwxÂÈÉÊËÌÒÛQWX and 0123456789.
     * Then, it returns true if the result of contains method which checks the existence of previous char and next char
     * at apostropheLetters returns true, returns false otherwise.
     *
     * @param line String input to check.
     * @param i    index.
     * @return true if apostropheLetters contains previous char and next char, false otherwise.
     */
    private isApostrophe;
    /**
     * The numberExistsBeforeAndAfter method takes a String line and an integer i as inputs. Then, it returns true if
     * the result of contains method, which compares the previous char and next char with 0123456789, returns true and
     * false otherwise.
     *
     * @param line String input to check.
     * @param i    index.
     * @return true if previous char and next char is a digit, false otherwise.
     */
    private numberExistsBeforeAndAfter;
    /**
     * The isTime method takes a String line and an integer i as inputs. Then, it returns true if
     * the result of the contains method, which compares the previous char, next char and two next chars with 0123456789,
     * returns true and false otherwise.
     *
     * @param line String input to check.
     * @param i    index.
     * @return true if previous char, next char and two next chars are digit, false otherwise.
     */
    private isTime;
    /**
     * The split method takes a String line as an input. Firstly it creates a new sentence as currentSentence a new {@link Array}
     * as sentences. Then loops till the end of the line and checks some conditions;
     * If the char at ith index is a separator;
     * <p>
     * ' : assigns currentWord as currentWord'
     * { : increment the curlyBracketCount
     * } : decrement the curlyBracketCount
     * " : increment the specialQuotaCount
     * " : decrement the specialQuotaCount
     * ( : increment roundParenthesisCount
     * ) : decrement roundParenthesisCount
     * [ : increment bracketCount
     * ] : decrement bracketCount
     * " : assign quotaCount as 1- quotaCount
     * ' : assign apostropheCount as 1- apostropheCount
     * <p>
     * If the currentWord is not empty, it adds the currentWord after repeatControl to currentSentence.
     * <p>
     * If the char at index i is " and  bracketCount, specialQuotaCount, curlyBracketCount, roundParenthesisCount, and
     * quotaCount equal to 0 and also the next char is uppercase or digit, it adds currentSentence to sentences.
     * <p>
     * If the char at ith index is a sentence ender;
     * <p>
     * . and currentWord is www : assigns webMode as true. Ex: www.google.com
     * . and currentWord is a digit or in web or e-mail modes : assigns currentWord as currentWord+char(i) Ex: 1.
     * . and currentWord is a shortcut or an abbreviation : assigns currentWord as currentWord+char(i) and adds currentWord to currentSentence. Ex : bkz.
     * ' and next char is uppercase or digit: add word to currentSentence as ' and add currentSentence to sentences.
     *
     * <p>
     * If the char at index i is ' ', i.e space, add word to currentSentence and assign "" to currentSentence.
     * If the char at index i is -,  add word to currentSentence and add sentences when the wordCount of currentSentence greater than 0.
     * <p>
     * If the char at ith index is a punctuation;
     * : and if currentWord is "https" : assign webMode as true.
     * , and there exists a number before and after : assign currentWord as currentWord+char(i) Ex: 1,2
     * : and if line is a time : assign currentWord as currentWord+char(i) Ex: 12:14:24
     * - and there exists a number before and after : assign currentWord as currentWord+char(i) Ex: 12-1
     * {@literal @} : assign emailMode as true.
     *
     * @param line String input to split.
     * @return sentences {@link Array} which holds split line.
     */
    split(line: string): Array<Sentence>;
}
