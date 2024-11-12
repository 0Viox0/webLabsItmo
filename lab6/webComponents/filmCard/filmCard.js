class FilmCard extends HTMLElement {
    constructor() {
        super();
    }

    connectedCallback() {
        const shadowRoot = this.attachShadow({ mode: "open" });

        const style = document.createElement("link");
        style.setAttribute("rel", "stylesheet");
        style.setAttribute("href", "webComponents/filmCard/filmCardStyles.css");

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

document.addEventListener("DOMContentLoaded", () => {
    customElements.define("film-card", FilmCard);
});
