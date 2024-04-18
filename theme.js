document.addEventListener('DOMContentLoaded', function() {

    function toggleTheme() {
        const html = document.querySelector('html');
        const currentTheme = html.getAttribute('data-theme');

        if (currentTheme === 'light') {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
        } else {
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
        }
    }    

    // Verificar a preferência do tema salva no localStorage
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.querySelector('html').setAttribute('data-theme', savedTheme);
    }

    const themeToggle = document.getElementById('themeCheckbox');

    themeToggle.addEventListener('change', function() {
        toggleTheme();
    });
});

window.addEventListener('scroll', function() {
    var scrollToTopButton = document.getElementById('scrollToTopButton');

    if (window.scrollY > 300) {
        scrollToTopButton.style.display = 'block';
    } else {
        scrollToTopButton.style.display = 'none';
    }
});


document.getElementById('scrollToTopButton').addEventListener('click', function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});