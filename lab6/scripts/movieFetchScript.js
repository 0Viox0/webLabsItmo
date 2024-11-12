class FilmCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "open" });

        const style = document.createElement("style");
        style.textContent = `
            .filmList__filmCard {
                width: 346px;
                height: 549px;
                display: flex;
                flex-direction: column;
                align-items: start;
            }

            .filmCard__filmImage {
                width: 100%;
                height: 420px;
                border-radius: 34px;
            }

            .filmCard__filmName {
                font-size: 3rem;
                font-weight: 600;
                color: #d1d1d1;
                margin-top: 15px;
                margin-bottom: 0;
                width: 300px;
                white-space: nowrap;
                overflow: hidden;
                text-overflow: ellipsis;
            }

            .filmCard__filmDescription {
                margin-top: 15px;
                color: #d1d1d1;
                font-size: 2rem;
                text-decoration: underline;
                font-weight: 400;
            }
        `;

        const template = document.getElementById("film-card-template");
        const cloned = template.content.cloneNode(true);

        const thumbnailLink = this.getAttribute("thumbnail-link");
        const title = this.getAttribute("title");
        const altImgText = this.getAttribute("alt-img-text");

        cloned.querySelector(".filmCard__filmName").innerText = title;
        const img = cloned.querySelector(".filmCard__filmImage");
        img.setAttribute("src", thumbnailLink);
        img.setAttribute("alt", altImgText);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(cloned);
    }
}

class FilmList extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "open" });

        const style = document.createElement("style");
        style.textContent = `
                    .listingText {
                        font-size: 4rem;
                        color: #d1d1d1;
                    
                        text-align: center;
                        font-weight: 400;
                    
                        margin-left: 0;
                    }

                    .filmList {
                        width: 90%;
                        margin: auto;
                    
                        display: grid;
                        grid-template-columns: repeat(1, 1fr);
                        justify-items: center;
                        gap: 3%;
                    }

                    .preloader {
                        border: 6px solid #f3f3f3;
                        border-top: 6px solid #3498db;
                        border-radius: 50%;
                        width: 40px;
                        height: 40px;
                        animation: spin 2s linear infinite;
                        margin: 20px auto;
                    }
                    
                    @keyframes spin {
                        0% {
                            transform: rotate(0deg);
                        }
                        100% {
                            transform: rotate(360deg);
                        }
                    }

                    @media only screen and (min-width: 850px) {
                        .filmList {
                            grid-template-columns: repeat(2, 1fr);
                        }
                    }
                    
                    @media only screen and (min-width: 1265px) {
                        .filmList {
                            grid-template-columns: repeat(3, 1fr);
                        }
                    }
                    
                    @media only screen and (min-width: 1372px) {
                        .filmList {
                            grid-template-columns: repeat(3, 1fr);
                        }
                    }
                    
                    @media only screen and (min-width: 1772px) {
                        .filmList {
                            grid-template-columns: repeat(4, 1fr);
                        }
                        .listingText {
                            text-align: start;
                            margin-left: 173px;
                        }
                    }
                    `;

        const template = document.getElementById("film-list");
        const cloned = template.content.cloneNode(true);

        shadowRoot.appendChild(style);
        shadowRoot.appendChild(cloned);

        this.filmListContainer = shadowRoot.getElementById("filmList");
        this.preloader = shadowRoot.getElementById("preloader");

        this.fetchFilms();
    }

    async fetchFilms() {
        try {
            this.preloader.style.display = "block";

            const randomId = Math.random() > 0.5 ? 100 : 200;
            const response = await fetch(
                `https://jsonplaceholder.typicode.com/photos?_start=${randomId}&_limit=10`,
            );

            if (!response.ok) {
                throw new Error("Network response was not ok");
            }

            const films = await response.json();
            this.renderFilms(films);
        } catch (error) {
            this.displayError("Something went wrong while fetching films.");
        } finally {
            this.preloader.style.display = "none";
        }
    }

    renderFilms(films) {
        this.filmListContainer.innerHTML = "";
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
    customElements.define("film-card", FilmCard);
    customElements.define("film-list", FilmList);

    // const filmListContainer = document.getElementById("filmList");
    // const preloader = document.getElementById("preloader");
    //
    // const fetchFilms = async () => {
    //     try {
    //         preloader.style.display = "block";
    //
    //         const randomId = Math.random() > 0.5 ? 100 : 200;
    //         const response = await fetch(
    //             `https://jsonplaceholder.typicode.com/photos?_start=${randomId}&_limit=10`,
    //         );
    //
    //         if (!response.ok) {
    //             throw new Error("Network response was not ok");
    //         }
    //
    //         const films = await response.json();
    //         renderFilms(films);
    //     } catch (error) {
    //         displayError("Something went wrong while fetching films.");
    //     } finally {
    //         preloader.style.display = "none";
    //     }
    // };
    //
    // const renderFilms = (films) => {
    //     filmListContainer.innerHTML = "";
    //     films.forEach((film) => {
    //         filmListContainer.innerHTML += `
    //                          <film-card
    //                                  title="${film.title}"
    //                                  thumbnail-link="${film.thumbnailUrl}"
    //                                  alt-img-text="${film.title} film photo">
    //                          </film-card>`;
    //     });
    // };

    // const displayError = (errorMessage) => {
    //     filmListContainer.innerHTML = `<div class="error">${errorMessage}</div>`;
    // };

    // fetchFilms();
});

// TODO: add paginated loading
// TODO: read about async in js
