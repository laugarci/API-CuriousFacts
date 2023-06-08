document.addEventListener('DOMContentLoaded', () => {
  const funFactContainer = document.getElementById("fun-fact");

  function createFunFactElement(text) {
    const div = document.createElement("div");
    div.classList.add("fun-fact-box");
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    div.appendChild(paragraph);
    return div;
  }

  function displaySavedFacts(savedFacts) {
    savedFacts.forEach(factArr => {
      const fact = factArr[0];
      const funFactElement = createFunFactElement(fact);
      funFactContainer.appendChild(funFactElement);
    });
  }

  // Obtener datos del localStorage
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
