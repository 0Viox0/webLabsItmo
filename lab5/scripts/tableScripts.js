window.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = document.getElementById("tableForm");

    const filmName = form.elements["filmName"].value;
    const filmLanguage = form.elements["language"].value;
    const filmBookDuration = form.elements["bookDuration"].value;

    createNewFilmCard(filmName, filmLanguage, filmBookDuration);

    saveCardsToLocalStorage(filmName, filmLanguage, filmBookDuration);

    form.reset();
});

const createNewFilmCard = (name, language, duration) => {
    const filmOrderCardDiv = document.createElement("div");
    filmOrderCardDiv.className = "filmCard__div";

    const filmOrderCardFilmName = document.createElement("h1");
    filmOrderCardFilmName.className = "filmCard__filmName";
    filmOrderCardFilmName.textContent = name;

    const filmOrderCardInfoContainer = document.createElement("div");
    filmOrderCardInfoContainer.className = "filmCard__infoContainer";

    const filmOrderCardFilmLanguage = document.createElement("div");
    filmOrderCardFilmLanguage.className = "filCard__info";
    filmOrderCardFilmLanguage.innerHTML = `Language: <span class="filmCardInfo__content">${language}</span>`;

    const filmOrderCardFilmBookDuration = document.createElement("div");
    filmOrderCardFilmBookDuration.className = "filCard__info";
    filmOrderCardFilmBookDuration.innerHTML = `Book duration: <span class="filmCardInfo__content">${duration}</span> days`;

    filmOrderCardInfoContainer.appendChild(filmOrderCardFilmLanguage);
    filmOrderCardInfoContainer.appendChild(filmOrderCardFilmBookDuration);

    const removeButton = document.createElement("button");
    removeButton.className = "filmCard__deleteButton";
    removeButton.textContent = "Remove";
    removeButton.addEventListener("click", () => {
        filmOrderCardDiv.remove();
        removeCardFromLocalStorage(name);
    });

    filmOrderCardDiv.appendChild(filmOrderCardFilmName);
    filmOrderCardDiv.appendChild(filmOrderCardInfoContainer);
    filmOrderCardDiv.appendChild(removeButton);

    const filmCardsContainer = document.querySelector(".innerRightContainer");
    filmCardsContainer.appendChild(filmOrderCardDiv);
};

const saveCardsToLocalStorage = (name, language, duration) => {
    let savedCards = JSON.parse(localStorage.getItem("filmCards"));
    savedCards.push({ name, language, duration });
    localStorage.setItem("filmCards", JSON.stringify(savedCards));
};

const removeCardFromLocalStorage = (name) => {
    let savedCards = JSON.parse(localStorage.getItem("filmCards"));
    savedCards = savedCards.filter((card) => card.name !== name);
    localStorage.setItem("filmCards", JSON.stringify(savedCards));
};

const loadSavedFilmCards = () => {
    const savedCards = JSON.parse(localStorage.getItem("filmCards"));
    savedCards.forEach((card) => {
        createNewFilmCard(card.name, card.language, card.duration);
    });
};

window.addEventListener("DOMContentLoaded", () => {
    loadSavedFilmCards();
});
