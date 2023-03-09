let theme=document.querySelector("#theme");
theme.addEventListener("click", function () {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
        localStorage.setItem('website_theme', 'dark-mode');
    } else {
        localStorage.setItem('website_theme', 'default');
    }
});

function retrieve_theme() {
    var theme = localStorage.getItem('website_theme');
    if (theme !=null) {
        document.body.classList.remove('default', 'dark-mode');
        document.body.classList.add('theme');
    }
}

retrieve_theme();

window.addEventListener('storage', function () {
    retrieve_theme();

},false)
