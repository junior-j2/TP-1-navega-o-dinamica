document.addEventListener("DOMContentLoaded", function() {
    const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");

    if (menuToggle && nav) {
        menuToggle.addEventListener("click", function() {
            nav.classList.toggle("menu-aberto");
        });
    }

    nav.addEventListener("click", function(e) {
        if (e.target.closest("li")) {
            nav.classList.remove("menu-aberto");
        }
    });
});
let noticiasCarregadas = false;

function lerNoticias() {
    const carousel = document.querySelector('.container-carousel');
    console.log("carousel =", carousel);
    const container = document.getElementById("container");

    if (!carousel){
        console.error("Elemento .container-carousel não encontrado.");
        return;
    }

    if (!noticiasCarregadas) {
        carousel.style.display = 'none';
        container.innerHTML = "";
        carregarNoticias();
        noticiasCarregadas = true;
    } else {
        container.innerHTML = "";
        carousel.style.display = 'block';
        noticiasCarregadas = false;
    }
}

function carregarNoticias() {
    const container = document.getElementById("container");

    dados.forEach(item => {
        const cartao = document.createElement("div");
        cartao.className = "cartao";

        cartao.innerHTML = `
          <img src="${item.imagem}" alt="${item.titulo}" class="imagem">
          <section class="corpo-do-cartao">
            <h2 class="titulo-noticia-cartao">${item.titulo}</h2>
            <p>${item.categoria} - ${item.data}</p>
            <p class="descricao-noticia-cartao">${item.descricao}</p>
            <p class="autor-noticia-cartao">${item.autor}</p>
          </section>
          <a class="botao-cartao" href="detalhes.html?id=${item.id}">Leia mais</a>
        `;

        container.appendChild(cartao);
    });

}
