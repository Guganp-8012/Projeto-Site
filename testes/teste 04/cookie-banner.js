// Função para definir um cookie
function setCookie(name, value) {
  document.cookie = name + "=" + value + "; path=/";
}

// Função para obter o valor de um cookie
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) == 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return null;
}

// Exemplo de uso: definir um cookie para armazenar o tema escolhido pelo usuário
var temaEscolhido = "escuro"; // Supondo que o usuário tenha escolhido um tema escuro
setCookie("tema", temaEscolhido);

// Mais tarde, você pode ler o cookie para aplicar o tema salvo
var temaSalvo = getCookie("tema");
if (temaSalvo) {
  // Aplica o tema salvo no seu site
  aplicarTema(temaSalvo);
}

  