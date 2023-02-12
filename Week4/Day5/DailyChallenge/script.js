/* Create a function that:

takes in two strings as two parameters
and returns a boolean that indicates whether or not the first string is an anagram of the second string.
Some Help

What is an anagram?
An anagram is another word or phrase formed by rearranging letters of the first word or phrase.


Example of anagrams

"Astronomer" is an anagram of "Moon starer"
"School master" is an anagram of "The classroom"
"The Morse Code" is an anagram of "Here come dots"

 */

let word1 = "Astronomer" 

function isAnagram(word1, word2) {

    console.log(word1.toLowerCase().split(" ").sort().join(""), word2.toLowerCase().split(" ").sort().join(""))
    return word1.toLowerCase().split(" ").sort().join("") == word2.toLowerCase().split(" ").sort().join("")
}

console.log(isAnagram("astronomer", "moon starer"))