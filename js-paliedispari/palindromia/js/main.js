// Chiedo all'utente una parola
let chosenWord = prompt("Inserisci una parola", "lol").trim().toLowerCase();
console.log(chosenWord);

// Creo la mia funzione per verificare se la parola è palindroma
function palindromeCheck() {
  // Divido la parola in lettere e le inverto
  let splittedWord = chosenWord.split("");
  console.log(splittedWord);

  // Dichiaro l'array per la parola invertita
  const reversedWord = [];

  // Inserisco ogni lettera nell'array
  for (let i = 0; i < chosenWord.length; i++) {
    let currentChar = chosenWord[i];
    reversedWord.unshift(currentChar);
  }

  console.log(reversedWord);

  // Output
  isWordPalindrome = splittedWord.join() === reversedWord.join();
  isWordPalindrome
    ? console.log("isWordPalindrome:", isWordPalindrome) + alert("The word is Palindrome")
    : console.log("IsWordPalindrome:", isWordPalindrome) + alert("The word is not Palindrome");
}

// Invoco la funzione per verificare
palindromeCheck(chosenWord);
