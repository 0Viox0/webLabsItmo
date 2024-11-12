class FilmList extends HTMLElement {
    constructor() {
        super();
        this.currentOffset = 0;
        this.limit = 10;
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "open" });

        const style = document.createElement("link");
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("href", "webComponents/filmList/filmListStyles.css");

        const template = document.getElementById("film-list");
        const cloned = template.content.cloneNode(true);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(cloned);

        this.filmListContainer = shadowRoot.getElementById("filmList");
        this.preloader = shadowRoot.getElementById("preloader");
        this.loadMoreButton = shadowRoot.getElementById("loadMoreButton");

        this.loadMoreButton.addEventListener("click", () =>
            this.fetchMoreFilms(),
        );

        this.fetchFilms();
    }

    async fetchFilms() {
        try {
            this.preloader.style.display = "block";

            const response = await fetch(
                `https://jsonplaceholder.typicode.com/photos?_start=${this.currentOffset}&_limit=${this.limit}`,
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const films = await response.json();

            this.renderFilms(films);

            this.currentOffset += this.limit;
        } catch (error) {
            this.displayError("Something went wrong while fetching films.");
        } finally {
            this.preloader.style.display = "none";
        }
    }

    fetchMoreFilms() {
        this.fetchFilms();
    }

    renderFilms(films) {
        films.forEach((film) => {
            this.filmListContainer.innerHTML += `
                <film-card 
                    title="${film.title}" 
                    thumbnail-link="${film.thumbnailUrl}" 
                    alt-img-text="${film.title} film photo">
                </film-card>`;
        });
    }

    displayError(errorMessage) {
        this.filmListContainer.innerHTML = `<div class="error">${errorMessage}</div>`;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    customElements.define("film-list", FilmList);
});
