document.addEventListener('DOMContentLoaded', function() {
    // Gomb megjelenítése görgetéskor
    window.onscroll = function() {
        const backToTopButton = document.getElementById('back-to-top');
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            backToTopButton.classList.add('show');
        } else {
            backToTopButton.classList.remove('show');
        }
    };

    // Visszatekerés az oldal tetejére kattintáskor
    document.getElementById('back-to-top').onclick = function() {
        document.body.scrollTop = 0; // Safari
        document.documentElement.scrollTop = 0; // Chrome, Firefox, IE és Opera
        return false;
    };
});


