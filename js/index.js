const funFact = document.getElementById("fun-fact");
const btnfunFact = document.getElementById("fun-fact-btn");


function getfunFact () {
    fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
    .then(response => response.json())
    .then (data => {
        funFact.textContent = data.text;
    })
    .catch(error => {
        console.log("error:", error);
    })
}

btnfunFact.addEventListener("click", getfunFact);
getfunFact();
