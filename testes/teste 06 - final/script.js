document.addEventListener('DOMContentLoaded', function() {

    function toggleTheme() {
        const html = document.querySelector('html');
        const currentTheme = html.getAttribute('data-theme');
    
        if (currentTheme === 'light') {
            html.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');
            // Atualizar o ícone para o tema escuro
            document.querySelector('.themeCheckbox img').setAttribute('src', '/assets/icons/theme_dark.svg');
        } else {
            html.setAttribute('data-theme', 'light');
            localStorage.setItem('theme', 'light');
            // Atualizar o ícone para o tema claro
            document.querySelector('.themeCheckbox img').setAttribute('src', '/assets/icons/theme_light.svg');
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