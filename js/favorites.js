const favoriteFactsContainer = document.getElementById("fun-fact");
const savedFactsKey = "savedFacts";

function displayFavoriteFacts() {
  
  const savedFacts = localStorage.getItem(savedFactsKey);
  if (savedFacts) {
    const favoriteFacts = JSON.parse(savedFacts);
    favoriteFactsContainer.innerHTML = ""; // Limpiar el contenedor antes de agregar los hechos favoritos

    // Recorrer los hechos curiosos favoritos y crear elementos para mostrarlos
    favoriteFacts.forEach(fact => {
      const factElement = document.createElement("p");
      factElement.textContent = fact;
      favoriteFactsContainer.appendChild(factElement);
    });
  } else {
    favoriteFactsContainer.textContent = "no favorites yet.";
  }
}

// Llamar a la función para mostrar los hechos curiosos favoritos al cargar la página
window.addEventListener("DOMContentLoaded", displayFavoriteFacts);