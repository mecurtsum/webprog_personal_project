'use strict'

if (document.querySelector('.btn1') !== null) {
    const switcher1 = document.querySelector('.btn1');

    switcher1.addEventListener('click', function() {
        var theme = document.getElementById('theme');
        if (theme.href.includes("style.css")) {
            theme.href = "style3.css";
        } else {
            theme.href = "style.css";
        }
    })
};
if (document.querySelector('.btn2') !== null) {
    const switcher2 = document.querySelector('.btn2');

    switcher2.addEventListener('click', function() {
        var theme = document.getElementById('theme');
        if (theme.href.includes("style2.css")) {
            theme.href = "style4.css";
        } else {
            theme.href = "style2.css";
        }
    })
};