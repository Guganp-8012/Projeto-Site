async function busca(){
let procura = await fetch("lista-produtos.json")
let produtos = await procura.json()

let listaDiv = document.getElementById("lista-card")

for (let produto of produtos){
    listaDiv.innerHTML += `
    <div class="card" data-id="${produto.id}">
        <div class="grupo-img">
        <img src="${produto.img}" alt="nao renderizou" width="auto" height="auto">
        </div>

        <div class="textos">
        <h3>${produto.nome}</h3>

        <p>${produto.descricao}</p>

        <div class="valores">
            <span class="com-desc">
            R$ ${(produto.comDesc).toFixed(2).replace(".", ",")}
            </span>
            <span class="sem-desc">
            R$ ${(produto.semDesc).toFixed(2).replace(".", ",")}
            </span>
        </div>
        </div>
    </div>
    `
}

let elementosCards = document.querySelectorAll(".card")

for (let card of elementosCards){
    card.addEventListener("click", clique)
}
}

busca()

function clique(){
let elementoID = this.getAttribute("data-id")
window.location.href = "detalhes.html?id=" + elementoID
}