/**
 * Combine all strings in the array into a single string. It returns an empty string if the array is empty.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - A single string with all words combined together.
 */
function combineAllWords(words) {
  return words.join('')
}

/**
 * Return an array of the words but each word is repeated.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of whole numbers.
 */
function repeatAllWords(words) {
  if(words.length===0) return []
  let repeatWordsArr=[]
 
  for(let word of words){
       repeatWordsArr.push(word.repeat(2))
  }
  return repeatWordsArr
}

/**
 * Return an array of only those words that have four characters or less.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string[]} - An array of only small words.
 */
function getSmallWords(words) {

  if(words.length===0) return []
  let arrOfSmallWords=[]

  let len=words[0].length
  for(let word of words){
    if (word.length  < 4){
      arrOfSmallWords.push(word)
    }
  }
  return arrOfSmallWords
}

/**
 * Return the first word that includes the character. If no word is found, return `null`.
 *
 * @param {string[]} words - An array of strings.
 * @param {string} character - A single character.
 * @returns {string|null} - The found word or `null`.
 */
function findWordWithCharacter(words, character) {
  if(words.length===0) return null
  
  for(let word of words){
    if(word.includes(character)){
      return word
    }
  }
 return null
}

/**
 * Return `true` if all words are in all caps. Otherwise, return `false`.
 *
 * @param {string[]} words - An array of strings.
 * @returns {boolean} - Whether or not all words are in all caps.
 */
function allWordsAreAllCaps(words) {

    let allWordsAreAllCaps=[]
   
     for(let word of words){
       let char=word.split('')
       let count=0
       for(char of word){
         if(char===char.toUpperCase()){
             count+=1
          }
        //  console.log(count)
       }
      //  console.log('wordlenght=',count,word.length)
       if(count === word.length){
          allWordsAreAllCaps.push(true)
       }else{
         allWordsAreAllCaps.push(false)
       }
     }
      // console.log(allWordsAreAllCaps)
      // console.log( allWordsAreAllCaps.includes(false)?false:true)
      return allWordsAreAllCaps.includes(false)?false:true
   }
   
  
/**
 * Return the first longest word.
 *
 * @param {string[]} words - An array of strings.
 * @returns {string} - The first word that is the longest.
 */
//  function getLongestWord(words) {
//   let longestWordInArray=''
//   let len=words[0].length
  
//   let min=Math.min(...words.map(({ length }) => length));
//   let max=Math.max(...words.map(({ length }) => length));

// if(max===min){
//     longestWordInArray=words[0]
//  }else{
//     for(let word of words){
//        if(word.length > len){
//           longestWordInArray=word
//         }
//      }
//  }
// return longestWordInArray
// }
  function getLongestWord(words) {
  let word = ""
  for(let i = 0;i<words.length;i++){
    if (word.length < words[i].length){
        word = words[i]
    }
   
  } return word || null;

}


module.exports = {
  combineAllWords,
  repeatAllWords,
  getSmallWords,
  findWordWithCharacter,
  allWordsAreAllCaps,
  getLongestWord,
};
