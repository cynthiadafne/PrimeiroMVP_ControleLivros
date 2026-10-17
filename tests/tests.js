function limparDados() {
    localStorage.removeItem("books");
}

function carregarLivros() {
    return JSON.parse(localStorage.getItem("books")) || [];
}

function testCadastroLivro() {

    try {

        localStorage.removeItem("books");

        books = [];

        document.getElementById("title").value =
            "Clean Code";

        document.getElementById("author").value =
            "Robert Martin";

        addBook();

        const dados =
            JSON.parse(
                localStorage.getItem("books")
            ) || [];

        if (dados.length !== 1) {
            throw new Error(
                "Livro não foi cadastrado."
            );
        }

        if (dados[0].title !== "Clean Code") {
            throw new Error(
                "Título incorreto."
            );
        }

        if (dados[0].author !== "Robert Martin") {
            throw new Error(
                "Autor incorreto."
            );
        }

        console.log(
            " Cadastro aprovado"
        );

    } catch (erro) {

        console.error(
            " Falha no cadastro:",
            erro.message
        );
    }
}

function testAlteracaoStatus() {

    try {

        localStorage.removeItem("books");

        books = [{
            id: 1,
            title: "DDD",
            author: "Eric Evans",
            status: "NAO_LIDO"
        }];

        saveBooks();

        toggleStatus(1);

        const dados =
            JSON.parse(
                localStorage.getItem("books")
            );

        if (
            dados[0].status !== "LIDO"
        ) {
            throw new Error(
                "Status não alterado."
            );
        }

        console.log(
            " Alteração de status aprovada"
        );

    } catch (erro) {

        console.error(
            " Falha na alteração:",
            erro.message
        );
    }
}
function testExclusaoLivro() {

    try {

        localStorage.removeItem("books");

        books = [{
            id: 1,
            title: "Refactoring",
            author: "Martin Fowler",
            status: "NAO_LIDO"
        }];

        saveBooks();

        deleteBook(1);

        const dados =
            JSON.parse(
                localStorage.getItem("books")
            ) || [];

        if (dados.length !== 0) {

            throw new Error(
                "Livro não foi removido."
            );
        }

        console.log(
            " Exclusão aprovada"
        );

    } catch (erro) {

        console.error(
            " Falha na exclusão:",
            erro.message
        );
    }
}

function testPersistencia() {

    try {

        localStorage.removeItem("books");

        books = [{
            id: 1,
            title: "Clean Architecture",
            author: "Robert Martin",
            status: "NAO_LIDO"
        }];

        saveBooks();

        const dados =
            JSON.parse(
                localStorage.getItem("books")
            );

        if (dados.length !== 1) {

            throw new Error(
                "Persistência falhou."
            );
        }

        console.log(
            " Persistência aprovada"
        );

    } catch (erro) {

        console.error(
            " Falha na persistência:",
            erro.message
        );
    }
}

console.log(
    "===== INICIANDO TESTES ====="
);

testCadastroLivro();
testAlteracaoStatus();
testExclusaoLivro();
testPersistencia();

console.log(
    "===== TESTES FINALIZADOS ====="
);
