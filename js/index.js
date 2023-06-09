const funFact = document.getElementById("fun-fact");
const likeHeart = document.getElementById("like-heart");
const likeHeartFull = document.getElementById("like-heart-full");
const savedFactsKey = "savedFacts";
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
        likeHeart.classList.remove("clicked");
        typeWriterEffect(data.text, 50);
      })
      .catch(error => {
        console.log("error:", error);
      });
  }

function saveFact(fact) {
    let savedFacts = localStorage.getItem(savedFactsKey);
    if (savedFacts) {
      savedFacts = JSON.parse(savedFacts);
    } else {
      savedFacts = [];
    }
    savedFacts.push([fact]);
    localStorage.setItem(savedFactsKey, JSON.stringify(savedFacts));
  }
  
function removeFact(fact) {
    let savedFacts = localStorage.getItem(savedFactsKey);
    if (savedFacts) {
      savedFacts = JSON.parse(savedFacts);
      const index = savedFacts.findIndex(item => item[0] === fact);
      if (index > -1) {
        savedFacts.splice(index, 1);
        localStorage.setItem(savedFactsKey, JSON.stringify(savedFacts));
      }
    }
  }

function handleLikeHeartClick() {
  likeHeart.style.visibility = "hidden";
  likeHeartFull.style.visibility = "visible";
  const fact = funFact.textContent;
  saveFact(fact);
}

function handleLikeHeartFullClick() {
  const fact = funFact.textContent;
  removeFact(fact);
  likeHeart.style.visibility = "visible";
  likeHeartFull.style.visibility = "hidden";
}

function handleBtnFunFactClick() {
  audio.pause();
  getfunFact();
  likeHeart.style.visibility = "visible";
  likeHeartFull.style.visibility = "hidden";
}

module.exports = {
  handleBtnFunFactClick,
  handleLikeHeartFullClick,
  handleLikeHeartClick
};