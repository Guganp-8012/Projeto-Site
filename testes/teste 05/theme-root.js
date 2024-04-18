// Função para alternar entre os temas e armazenar a preferência do usuário no localStorage
function toggleDarkMode() {
  const root = document.documentElement;
  if (root.id === 'darkmode') {
      root.id = '';
      localStorage.removeItem('theme');
  } else {
      root.id = 'darkmode';
      localStorage.setItem('theme', 'dark');
  }
}

// Verifica se há uma preferência de tema armazenada no localStorage ao carregar a página
document.addEventListener('DOMContentLoaded', function() {
  const theme = localStorage.getItem('theme');
  if (theme === 'dark') {
      document.documentElement.id = 'darkmode';
  }
});

// Adiciona um evento de clique ao botão de alternar tema
document.getElementById('theme-toggle').addEventListener('click', toggleDarkMode);
