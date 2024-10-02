window.addEventListener("submit", (e) => {
    e.preventDefault();
    const form = document.getElementById("tableForm");

    const filmName = form.elements["filmName"].value;
    const filmLanguage = form.elements["language"].value;
    const filmBookDuration = form.elements["bookDuration"].value;

    createNewFilmCard(filmName, filmLanguage, filmBookDuration);

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
    });

    filmOrderCardDiv.appendChild(filmOrderCardFilmName);
    filmOrderCardDiv.appendChild(filmOrderCardInfoContainer);
    filmOrderCardDiv.appendChild(removeButton);

    const filmCardsContainer = document.querySelector(".innerRightContainer");
    filmCardsContainer.appendChild(filmOrderCardDiv);
};
