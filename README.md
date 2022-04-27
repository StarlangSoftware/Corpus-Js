Corpus
============

Video Lectures
============

[<img src="https://github.com/StarlangSoftware/Corpus/blob/master/video.jpg" width="50%">](https://youtu.be/xTrdKY5uI08)

For Developers
============
You can also see [Java](https://github.com/starlangsoftware/Corpus), [Python](https://github.com/starlangsoftware/Corpus-Py), 
[Cython](https://github.com/starlangsoftware/Corpus-Cy), [Swift](https://github.com/starlangsoftware/Corpus-Swift), 
[C++](https://github.com/starlangsoftware/Corpus-CPP), or [C#](https://github.com/starlangsoftware/Corpus-CS) repository.

## Requirements

* [Node.js 14 or higher](#Node.js)
* [Git](#git)

### Node.js 

To check if you have a compatible version of Node.js installed, use the following command:

    node -v
    
You can find the latest version of Node.js [here](https://nodejs.org/en/download/).

### Git

Install the [latest version of Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).

## Npm Install

	npm install nlptoolkit-corpus
	
## Download Code

In order to work on code, create a fork from GitHub page. 
Use Git for cloning the code to your local or below line for Ubuntu:

	git clone <your-fork-git-link>

A directory called util will be created. Or you can use below link for exploring the code:

	git clone https://github.com/starlangsoftware/corpus-js.git

## Open project with Webstorm IDE

Steps for opening the cloned project:

* Start IDE
* Select **File | Open** from main menu
* Choose `Corpus-Js` file
* Select open as project option
* Couple of seconds, dependencies will be downloaded. 

Detailed Description
============

+ [Corpus](#corpus)
+ [TurkishSplitter](#turkishsplitter)

## Corpus

To store a corpus in memory

	a = Corpus("derlem.txt");

If this corpus is split with dots but not in sentences

	constructor(fileName: string = undefined, splitterOrChecker: SentenceSplitter = undefined)

To eliminate the non-Turkish sentences from the corpus

	constructor(fileName: string = undefined, splitterOrChecker: LanguageChecker = undefined)

The number of sentences in the corpus

	sentenceCount(): number

To get ith sentence in the corpus

	getSentence(index: number): Sentence

## TurkishSplitter

TurkishSplitter class is used to split the text into sentences in accordance with the . rules of Turkish.

	split(line: string): Array<Sentence>
