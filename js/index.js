const funFact = document.getElementById("fun-fact");
const btnfunFact = document.getElementById("fun-fact-btn");

function typeWriterEffect(text, speed) {
  let i = 0;
  const interval = setInterval(() => {
    funFact.textContent += text.charAt(i);
    i++;
    if (i > text.length) {
      clearInterval(interval);
    }
  }, speed);
}

function getfunFact() {
  fetch('https://uselessfacts.jsph.pl/api/v2/facts/random')
    .then(response => {
      if (!response.ok) {
        throw new Error("Error HTTP: " + response.status);
      }
      return response.json();
    })
    .then(data => {
      funFact.textContent = "";
      typeWriterEffect(data.text, 50);
    })
    .catch(error => {
      console.log("error:", error);
    });
}

btnfunFact.addEventListener("click", getfunFact);
getfunFact();
