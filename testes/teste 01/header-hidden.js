let lastScrollTop = 0;
const headerTop = document.getElementById('header-top');
const headerBottom = document.getElementById('header-bottom');

window.addEventListener('scroll', function() {
  let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

  if (currentScroll > lastScrollTop) {
    // Rolar para baixo
    headerTop.style.top = '-60px'; // Esconde a parte superior
    headerBottom.style.display = 'none'; // Oculta a parte inferior
  } else {
    // Rolar para cima
    headerTop.style.top = '0'; // Exibe a parte superior
    headerBottom.style.display = 'block'; // Exibe a parte inferior
  }
  lastScrollTop = currentScroll;
});
