// Detect Pangram

// A pangram is a sentence that contains every single letter of the alphabet at least once.For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A - Z at least once(case is irrelevant).

// Given a string, detect whether or not it is a pangram.Return True if it is, False if not.Ignore numbers and punctuation.


function isPangram(str) {
  const filteredStr = str.toLowerCase().replace(/[^a-z]/g, '')
  const arr = filteredStr.split("")
  const unique = [...new Set(arr)]
  return unique.join("").length === 26
}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))// true;
console.log(isPangram("This is not a pangram."))// false;