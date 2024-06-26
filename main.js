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

// Adiciona um event listener que escuta o evento de rolagem da janela
window.addEventListener('scroll', function() {
    // Obtém uma referência para o botão "scrollToTopButton"
    var scrollToTopButton = document.getElementById('scrollToTopButton');

    // Verifica se o usuário rolou mais de 300 pixels para baixo
    if (window.scrollY > 300) {
        // Se sim, mostra o botão
        scrollToTopButton.style.display = 'block';
    } else {
        // Se não, oculta o botão
        scrollToTopButton.style.display = 'none';
    }
});

// Adiciona um event listener que escuta o evento de clique no botão "scrollToTopButton"
document.getElementById('scrollToTopButton').addEventListener('click', function() {
    // Quando o botão é clicado, a página rola suavemente até o topo
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
