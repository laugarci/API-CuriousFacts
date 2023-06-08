document.addEventListener('DOMContentLoaded', () => {
    const funFactContainer = document.getElementById("fun-fact");
  
    function createFunFactElement(text) {
      const div = document.createElement("div");
      div.classList.add("fun-fact-box");
      const paragraph = document.createElement("p");
      paragraph.textContent = text;
  
      const crossMark = document.createElement("span");
      crossMark.classList.add("cross-mark");
      crossMark.textContent = "x";
  
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
