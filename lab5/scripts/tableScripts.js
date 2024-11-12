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
    const template = document.getElementById("filmCardTemplate");
    const clone = document.importNode(template.content, true);

    if (name.trim() === "") {
        return;
    }

    const filmOrderCardDiv = clone.querySelector(".filmCard__div");
    filmOrderCardDiv.querySelector(".filmCard__filmName").textContent = name;
    filmOrderCardDiv.querySelectorAll(".filmCardInfo__content")[0].textContent =
        language;
    filmOrderCardDiv.querySelectorAll(".filmCardInfo__content")[1].textContent =
        duration;

    const removeButton = filmOrderCardDiv.querySelector(
        ".filmCard__deleteButton",
    );
    removeButton.addEventListener("click", () => {
        filmOrderCardDiv.remove();
        removeCardFromLocalStorage(name);
    });

    const filmCardsContainer = document.querySelector(".innerRightContainer");
    filmCardsContainer.appendChild(filmOrderCardDiv);
};

const saveCardsToLocalStorage = (name, language, duration) => {
    let savedCards = JSON.parse(localStorage.getItem("filmCards"));
    if (savedCards) {
        savedCards.push({ name, language, duration });
        localStorage.setItem("filmCards", JSON.stringify(savedCards));
    } else {
        const newCards = [{ name, language, duration }];
        localStorage.setItem("filmCards", JSON.stringify(newCards));
    }
};

const removeCardFromLocalStorage = (name) => {
    let savedCards = JSON.parse(localStorage.getItem("filmCards"));
    savedCards = savedCards.filter((card) => card.name !== name);
    localStorage.setItem("filmCards", JSON.stringify(savedCards));
};

const loadSavedFilmCards = () => {
    const savedCards = JSON.parse(localStorage.getItem("filmCards"));

    if (savedCards) {
        savedCards.forEach((card) => {
            createNewFilmCard(card.name, card.language, card.duration);
        });
    }
};

window.addEventListener("DOMContentLoaded", () => {
    loadSavedFilmCards();
});
