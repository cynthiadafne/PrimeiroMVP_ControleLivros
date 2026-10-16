function limparDados() {
    localStorage.removeItem("books");
}

function carregarLivros() {
    return JSON.parse(localStorage.getItem("books")) || [];
}

function testCadastroLivro() {

    limparDados();

    books = [];

    books.push({
        id: 1,
        title: "Clean Code",
        author: "Robert Martin",
        status: "NAO_LIDO"
    });

    saveBooks();

    const resultado = carregarLivros();

    console.assert(
        resultado.length === 1,
        "Falha ao cadastrar livro"
    );

    console.log(" Cadastro aprovado");
}

function testAlteracaoStatus() {

    limparDados();

    books = [{
        id: 1,
        title: "DDD",
        author: "Eric Evans",
        status: "NAO_LIDO"
    }];

    saveBooks();

    toggleStatus(1);

    const resultado = carregarLivros();

    console.assert(
        resultado[0].status === "LIDO",
        "Falha ao alterar status"
    );

    console.log(" Alteração de status aprovada");
}

function testExclusaoLivro() {

    limparDados();

    books = [{
        id: 1,
        title: "Refactoring",
        author: "Martin Fowler",
        status: "NAO_LIDO"
    }];

    saveBooks();

    deleteBook(1);

    const resultado = carregarLivros();

    console.assert(
        resultado.length === 0,
        "Falha ao excluir livro"
    );

    console.log(" Exclusão aprovada");
}

function testPersistencia() {

    limparDados();

    books = [{
        id: 1,
        title: "Clean Architecture",
        author: "Robert Martin",
        status: "NAO_LIDO"
    }];

    saveBooks();

    const resultado =
        JSON.parse(localStorage.getItem("books"));

    console.assert(
        resultado.length === 1,
        "Falha na persistência"
    );

    console.log(" Persistência aprovada");
}

testCadastroLivro();
testAlteracaoStatus();
testExclusaoLivro();
testPersistencia();
