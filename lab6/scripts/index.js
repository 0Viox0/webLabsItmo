const handleMouseClick = (ev) => {
    const mobileNavBar = document.getElementById("mobileBurgerMenu");
    const mobileUl = document.getElementById("mobileNavigation");

    if (mobileNavBar && mobileNavBar.contains(ev.target)) {
        if (mobileUl.style.display === "block") {
            mobileUl.style.display = "none";
        } else {
            mobileUl.style.display = "block";
        }
    } else {
        mobileUl.style.display = "none";
    }
};

window.addEventListener("click", handleMouseClick);
