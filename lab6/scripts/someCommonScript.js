(function () {
    window.addEventListener("load", function () {
        const [performanceEntry] = performance.getEntriesByType("navigation");

        const loadTime =
            performanceEntry.domContentLoadedEventEnd -
            performanceEntry.startTime;

        const footer = document.getElementById("load-stats");

        footer.innerHTML = `Page load time: ${Math.round(loadTime)} ms`;
    });
})();
