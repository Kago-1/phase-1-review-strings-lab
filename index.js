// Write your code in this file!
let currentUser = `John`; 
const welcomeMessage = `Welcome to Flatbook, ${currentUser}!`;

const upperCaseCurrentUser = currentUser.toUpperCase(); // assigns currentUser variable to uppercase
const excitedWelcomeMessage = `WELCOME TO FLATBOOK, ${upperCaseCurrentUser}!`;

const firstInitial = currentUser[0];
//const restOfName = currentUser.slice(1);
const shortGreeting = `Welcome, ${firstInitial}!`;

console.log(shortGreeting);