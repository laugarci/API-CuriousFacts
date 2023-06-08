document.addEventListener('DOMContentLoaded', () => {
  const funFactContainer = document.getElementById("fun-fact");

  function createDiv() {
    const div = document.createElement("div");
    div.classList.add("fun-fact-box");
    return div;
  }

  function createParagraph(text) {
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    return paragraph;
  }

  function createCrossMark(text, div) {
    const crossMark = document.createElement("span");
    crossMark.classList.add("cross-mark");
    crossMark.textContent = "x";
    crossMark.addEventListener('click', () => {
      removeFunFact(text, div);
    });
    return crossMark;
  }

  function removeFunFact(text, div) {
    const savedFacts = localStorage.getItem("savedFacts");
    if (savedFacts) {
      try {
        const savedFactsJSON = JSON.parse(savedFacts);
        const updatedFacts = savedFactsJSON.filter(factArr => factArr[0] !== text);
        localStorage.setItem("savedFacts", JSON.stringify(updatedFacts));
      } catch (error) {
        console.log("Error al analizar el JSON de savedFacts:", error);
      }
    }
    div.parentNode.removeChild(div);
  }

  function createFunFactElement(text) {
    const div = createDiv();
    const paragraph = createParagraph(text);
    const crossMark = createCrossMark(text, div);

    div.appendChild(crossMark);
    div.appendChild(paragraph);
    return div;
  }

  const savedFacts = localStorage.getItem("savedFacts");

  if (savedFacts) {
    try {
      const savedFactsJSON = JSON.parse(savedFacts);
      savedFactsJSON.forEach(factArr => {
        const fact = factArr[0];
        const funFactElement = createFunFactElement(fact);
        funFactContainer.appendChild(funFactElement);
      });
    } catch (error) {
      console.log("Error al analizar el JSON de savedFacts:", error);
    }
  }
});
