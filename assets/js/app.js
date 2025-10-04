let noticiasCarregadas = false;

function lerNoticias() {
    const container = document.getElementById("container");

    if (!noticiasCarregadas) {
        carregarNoticias();
        noticiasCarregadas = true;
    } else {
        container.innerHTML = "";
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
