// que - 10
// As a web developer, your task is to build a function that examines a sentence and counts how many times each unique word appears in it. Using a map, the function efficiently keeps track of the occurrence of each word in the sentence.

const sentence =
  'please please submit your assignment on time, your assignments are important';

// function
const wordCounter = (sent) => {
  let wordsArr = sent.split(' ');
  let wordMap = new Map();

  for (let word of wordsArr) {
    if (wordMap.has(word)) {
      wordMap.set(word, wordMap.get(word) + 1);
    } else {
      wordMap.set(word, 1);
    }
  }

  console.log(wordMap);
};

// test-case
wordCounter(sentence);
