

let userWords = prompt("Write several words separated by commas")
let words = userWords.split(",")

function longestWordLength(words) {
    let maxLength = 0
    for (const word of words) {
        if(word.length > maxLength) {
            maxLength = word.length
        }
    }
    return maxLength
}

let length = longestWordLength(words)

console.log("*".repeat(length + 4))
for (const word of words) {
    let spaces = " ".repeat(length - word.length)
    console.log(`* ${word} ${spaces}*`)
}
console.log("*".repeat(length + 4))



