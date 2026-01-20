// Dark mode toggle - defaults to dark
(function() {
    // Default to dark if no preference saved
    if (localStorage.getItem("darkmode") === null) {
        localStorage.setItem("darkmode", "true");
    }

    function refreshDarkMode() {
        var icon = document.getElementById('darkmode');
        if (localStorage.getItem("darkmode") === "true") {
            document.body.classList.add("latex-dark");
            if (icon) icon.textContent = '☀';
        } else {
            document.body.classList.remove("latex-dark");
            if (icon) icon.textContent = '☾';
        }
    }

    function switchDarkMode() {
        if (localStorage.getItem("darkmode") === "true") {
            localStorage.setItem("darkmode", "false");
        } else {
            localStorage.setItem("darkmode", "true");
        }
        refreshDarkMode();
    }

    // Apply immediately
    refreshDarkMode();

    // Setup click handler when DOM ready
    document.addEventListener('DOMContentLoaded', function() {
        var icon = document.getElementById('darkmode');
        if (icon) {
            icon.addEventListener('click', switchDarkMode);
        }
        refreshDarkMode();
    });
})();
