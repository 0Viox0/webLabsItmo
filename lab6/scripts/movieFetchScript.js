document.addEventListener("DOMContentLoaded", () => {
    const filmListContainer = document.getElementById("filmList");
    const preloader = document.getElementById("preloader");

    const fetchFilms = async () => {
        try {
            preloader.style.display = "block";

            const randomId = Math.random() > 0.5 ? 100 : 200;
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/photos?_start=${randomId}&_limit=10`,
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const films = await response.json();
            renderFilms(films);
        } catch (error) {
            displayError("Something went wrong while fetching films.");
        } finally {
            preloader.style.display = "none";
        }
    };

    const renderFilms = (films) => {
        filmListContainer.innerHTML = "";
        films.forEach((film) => {
            const filmCard = `
                <div class="filmList__filmCard">
                    <img
                        src="${film.thumbnailUrl}"
                        alt="${film.title} film photo"
                        class="filmCard__filmImage"
                    />
                    <h1 class="filmCard__filmName">${film.title}</h1>
                    <span class="filmCard__filmDescription">
                        2024/04/01, genre
                    </span>
                </div>
            `;
            filmListContainer.innerHTML += filmCard;
        });
    };

    const displayError = (errorMessage) => {
        filmListContainer.innerHTML = `<div class="error">${errorMessage}</div>`;
    };

    fetchFilms();
});

// TODO: web component
// TODO: addtional load button
// TODO: async in js
