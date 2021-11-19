'use strict'

const switcher = document.querySelector('.btn');

switcher.addEventListener('click', function() {
    var theme = document.getElementById('theme');
    if (theme.href.includes("style.css")) {
        theme.href = "style3.css";
    } else {
        theme.href = "style.css";
    }
});