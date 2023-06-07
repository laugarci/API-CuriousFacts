const funFact = document.getElementById("fun-fact");
const btnfunFact = document.getElementById("fun-fact-btn");
const likeHeart = document.getElementById("like-heart");

let audio = new Audio("../sounds/typewritter.mp3");

function typeWriterEffect(text, speed) {
  let i = 0;
  const interval = setInterval(() => {
    funFact.textContent += text.charAt(i);
    i++;
    if (i > text.length) {
      clearInterval(interval);
      audio.pause();
      likeHeart.style.visibility = "visible";
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
      audio.currentTime = 0;
      audio.play();
      funFact.textContent = "";
      likeHeart.style.visibility = "hidden";
      typeWriterEffect(data.text, 50);
    })
    .catch(error => {
      console.log("error:", error);
    });
}

btnfunFact.addEventListener("click", () => {
  audio.pause();
  getfunFact();
});
