// Função para obter valores do formulário e adicionar novo conteúdo personalizado
function obterEAdicionarConteudo() {
    // Obter valores do formulário
    var preco = document.getElementById("preco").value;
    var email = document.getElementById("email").value;
    var vencimento = document.getElementById("vencimento").value;
    var caminhoImagem = document.getElementById("imagem").value;
    var categoria = document.getElementById("categoria").value;

    // Chamar a função adicionarNovoConteudo com os valores do formulário
    adicionarNovoConteudo(preco, email, vencimento, caminhoImagem, categoria);

    // Mostrar o botão "Remover Conteúdo"
    document.getElementById("removerConteudo").style.display = "block";
}

// Função para adicionar novo conteúdo personalizado
function adicionarNovoConteudo(preco, email, vencimento, caminhoImagem, categoria) {
    // Criar um novo parágrafo
    var novoParagrafo = document.createElement("p");
    
    // Adicionar informações ao novo parágrafo
    novoParagrafo.textContent = `Preço: ${preco}, Email: ${email}, Vencimento: ${vencimento}, Categoria: ${categoria}`;

    // Criar uma nova imagem
    var novaImagem = document.createElement("img");
    
    // Definir o caminho da imagem
    novaImagem.src = caminhoImagem;
    novaImagem.alt = "Descrição da imagem";

    // Adicionar a imagem ao novo parágrafo
    novoParagrafo.appendChild(novaImagem);

    // Adicionar o novo parágrafo ao conteúdo existente
    document.getElementById("conteudo").appendChild(novoParagrafo);
}

// Função para remover o último parágrafo adicionado
function removerUltimoConteudo() {
    var conteudo = document.getElementById("conteudo");
    var paragrafos = conteudo.getElementsByTagName("p");

    // Verificar se há pelo menos um parágrafo para remover
    if (paragrafos.length > 0) {
        conteudo.removeChild(paragrafos[paragrafos.length - 1]);
    }

    // Ocultar o botão "Remover Conteúdo" se não houver mais conteúdo
    if (paragrafos.length === 0) {
        document.getElementById("removerConteudo").style.display = "none";
    }
}
