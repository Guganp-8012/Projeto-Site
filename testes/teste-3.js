const containerDeEntrada = document.querySelector('input')
const elementoRaiz = document.documentElement
const temaClaro = { '--cor-de-fundo': '#FFF', '--cor-do-texto': '#1A1A1A', '--cor-de-fundo-do-botao': '#9B8AFB' }
const temaEscuro = { '--cor-de-fundo': '#1A1A1A', '--cor-do-texto': '#FFF', '--cor-de-fundo-do-botao': '#5925DC' }

window.onload = function() {
    obterTemaDoArmazenamentoLocal()
}

containerDeEntrada.addEventListener('change', function() {
    const estaMarcado = containerDeEntrada.checked
    mudarTema(estaMarcado ? temaEscuro : temaClaro)
})

function mudarTema(tema) {
    for (let propriedade in tema) {
        elementoRaiz.style.setProperty(propriedade, tema[propriedade])
    }
    salvarTemaNoArmazenamentoLocal(tema)
}

function salvarTemaNoArmazenamentoLocal(tema){
    localStorage.setItem('tema', JSON.stringify(tema))
}

function obterTemaDoArmazenamentoLocal() {
    const tema = JSON.parse(localStorage.getItem('tema'))
    mudarTema(tema || temaClaro) // Define o tema claro como padrão se não houver tema salvo
    containerDeEntrada.checked = saoTemasIguais(tema, temaEscuro)
}

function saoTemasIguais(primeiroTema, segundoTema) {
    for (let propriedade in primeiroTema){
        if (primeiroTema[propriedade] != segundoTema[propriedade]) return false
    }
    return true
}