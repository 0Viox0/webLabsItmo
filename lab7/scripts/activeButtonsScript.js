const headerItems = document.querySelectorAll("header ul li a");

const currentPage = document.location.href.split("/")[10].split(".")[0];

headerItems.forEach((item) => item.classList.remove("header__activeButton"));

switch (currentPage) {
    case "index":
        headerItems[0].classList.add("header__activeButton");
        headerItems[4].classList.add("header__activeButton");
        break;
    case "about":
        headerItems[1].classList.add("header__activeButton");
        headerItems[5].classList.add("header__activeButton");
        break;
    case "movies":
        headerItems[2].classList.add("header__activeButton");
        headerItems[6].classList.add("header__activeButton");
        break;
    case "orderFilm":
        headerItems[3].classList.add("header__activeButton");
        headerItems[7].classList.add("header__activeButton");
        break;
    default:
        break;
}
