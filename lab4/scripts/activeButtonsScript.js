(() => {
    const headerItems = document.querySelectorAll("header ul li a");

    headerItems.forEach((item) => {
        item.classList.remove("header__activeButton");
        if (item.href === location.href) {
            item.classList.add("header__activeButton");
        }
    });
})();
