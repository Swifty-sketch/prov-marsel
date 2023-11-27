// 2. String-arrays (3p)
// Skriv klart funktionen filterWordsWithLetterA som tar en array med strängar som
// input och returnerar en array med bara de strängar som innehåller "a" (bara liten bokstav).
// tips: använd indexOf eller includes

function filterWordsWithLetterA(words) {
    let filteredWords = [];
  
    for (let i = 0; i < words.length; i++) {
      if (words[i].indexOf('a') !== -1) {
        filteredWords.push(words[i]);
      }
    }
    return filteredWords;
  }
  
  console.log(filterWordsWithLetterA(["Programming", "is", "great!"])); // ska logga ["Programming", "great!"]  