var storedTheme = localStorage.getItem('theme') || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
var themeToggler = document.getElementById('theme-toggle');
if(storedTheme) {
    document.documentElement.setAttribute('color-theme', storedTheme);
    if (storedTheme == 'dark') {
        themeToggler.checked = true;
    }
}

themeToggler.onclick = (e) => {
    const checked = e.target.checked;
    var currentTheme = document.documentElement.getAttribute("color-theme");
    var targetTheme = "light";

    if(currentTheme === "light") {
        targetTheme = "dark";
    }

    localStorage.setItem('theme', targetTheme);
    document.documentElement.setAttribute('color-theme', targetTheme);
}