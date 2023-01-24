

let sentence = "The cake is not bad, I like it"


const wordNot = sentence.indexOf("not")
const wordBad = sentence.indexOf("bad")

if (wordNot < wordBad) {
   sentence = sentence.replace("not bad","good")
    console.log(sentence)
} 
else if (wordNot == -1 && wordBad == -1) {
        console.log(sentence)
        
}

/* 
If the word “bad” comes after the word “not”, you should replace the whole “not…bad” substring with “good”, then console.log the result. 
For example, the result here should be : “The movie is good, I like it”

If the word “bad” does not come after “not” or the words are not in the sentence, console.log the original sentence.
Example:

  Your string is : 'This dinner is not that bad ! You cook well', 
  --> the result is : 'This dinner is good ! You cook well'

  Your string is : 'This movie is not so bad !' 
  --> the result is : 'This movie is good !'

  Your string is : 'This dinner is bad !' 
  --> the result is : 'This dinner is bad !' */