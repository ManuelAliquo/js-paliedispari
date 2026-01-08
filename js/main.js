// Chiedo all'utente una parola
let chosenWord = prompt("Inserisci una parola", "lol").trim().toLowerCase();
console.log(chosenWord);

// Creo la mia funzione per verificare se la parola è palindroma
function palindromeCheck() {
  // Divido la parola in lettere e le inverto
  let reversedChosenWord = chosenWord.split("");
  console.log(reversedChosenWord);
}
