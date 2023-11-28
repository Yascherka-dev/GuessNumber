// création des "liens vers le HTML"

const inputValue = document.getElementById("inputValue")
const btnCheck = document.getElementById("btnCheck")
const textTry = document.getElementById("textTry")
const textResponse = document.getElementById("textResponse")

function randInt() {
    return 1 + Math.floor(100 * Math.random());
}
// for (let i = 1; i < 100; i++) {
//    console.log(randInt(1, 6))
// }

let computerNumber = randInt(1, 100);
console.log(computerNumber);

let guessTry = 10;

// mettre en place "écouteur" de clique sur "verifier"

btnCheck.onclick = function () {
    // récupérer la valeure saisie 
    let userNumber = Number(inputValue.value);
    console.log(userNumber);

    if (userNumber == computerNumber) {
        textResponse.innerHTML = "Youpi";
    } else {
        if (userNumber > computerNumber) {
            textResponse.innerHTML = "Trop grand";
        } else {
            textResponse.innerHTML = "Trop petit";
        }
        // retirer un essai 
        guessTry = guessTry - 1;
        textTry.innerHTML = "Il reste " + guessTry + " essais";
        // Verifier si essai à 0 
        if (guessTry <= 0) {
            textResponse.innerHTML = "Perdu, aucun essai restant";
            btnCheck.disabled = true;
        }
    }

}
