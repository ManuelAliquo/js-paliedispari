/*

// ### Palidroma ###
// Chiedere all’utente di inserire una parola.
// Creare una funzione per capire se la parola inserita è palindroma.

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

*/

// ### Pari e Dispari ###
// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random da 1 a 5 per il PC usando una funzione.
// Stabiliamo se la somma dei due numeri è pari o dispari usando una funzione.
// Dichiariamo chi ha vinto.

// Chiedo all'utente se sceglie Pari o Dispari
let userChoice = prompt(`Scegli tra "Pari" o "Dispari"`, "pari").trim().toLowerCase();
console.log("userChoice:", userChoice);

// Chiedo all'utente un numero da 1 a 5
let userNumber = parseInt(prompt("Scegli un numero da 1 a 5", 3));
console.log("userNumber", userNumber);

// Dichiaro una funzione per generare il numero randomico del pc
function randomNumberGenerator() {
  return Math.floor(Math.random() * 5 + 1);
}

// Invoco la funzione
let pcNumber = randomNumberGenerator();
console.log("pcNumber:", pcNumber);
