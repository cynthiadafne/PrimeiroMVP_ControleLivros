Relatório do Projeto MVP – Controle de Livros Lidos
1. Finalidade do Sistema

O sistema Controle de Livros Lidos foi desenvolvido como um MVP (Minimum Viable Product) com o objetivo de permitir que usuários mantenham um controle simples de sua lista de leitura.

A aplicação possibilita o gerenciamento dos livros através de operações básicas de CRUD (Create, Read, Update e Delete), permitindo:

Cadastrar novos livros;
Consultar a lista de livros cadastrados;
Atualizar o status de leitura (Lido / Não Lido);
Excluir livros da lista.

O projeto foi desenvolvido com foco em simplicidade, facilidade de demonstração e possibilidade de evolução futura.

2. Benefícios e Facilidades do Sistema

O sistema apresenta diversas vantagens:

Simplicidade de Uso

A interface foi projetada para ser intuitiva, permitindo que qualquer usuário realize o cadastro e gerenciamento dos livros sem necessidade de treinamento.

Persistência Local

Os dados ficam armazenados no navegador utilizando LocalStorage, eliminando a necessidade de instalação de banco de dados ou servidores.

Fácil Demonstração

Por ser uma aplicação web executada diretamente no navegador, basta abrir o arquivo HTML para utilizar o sistema.

Baixa Complexidade

Não exige configuração de ambiente, bibliotecas externas ou infraestrutura adicional.

Evolução Futura

A arquitetura adotada permite evoluir facilmente para:

Banco de dados SQL Server;
SQLite;
MySQL;
API REST;
Integração com IA Generativa;
Cadastro de usuários;
Controle de categorias;
Dashboard de leitura.
3. Arquitetura Utilizada

O projeto foi desenvolvido seguindo princípios de Arquitetura em Camadas.

Estrutura
Plain Text
Cliente (Browser)
↓
 
API / Controller
↓
 
Services
↓
 
Repository
↓
 
Persistência (LocalStorage)
API / Controller

Responsável por receber as ações do usuário e direcioná-las para as regras de negócio.

Service

Contém as regras de negócio da aplicação.

Exemplos:

Criar livro;
Alterar status;
Validar informações.
Repository

Responsável pelo acesso à camada de persistência.

Model

Representa os dados manipulados pelo sistema.

4. Utilização da Inteligência Artificial

A Inteligência Artificial foi utilizada em diversas etapas do desenvolvimento.

Levantamento da Solução

A IA auxiliou na:

Definição do escopo do MVP;
Escolha das funcionalidades;
Sugestão da arquitetura em camadas.
Desenvolvimento

A IA foi utilizada para:

Construção dos componentes JavaScript;
Geração do CRUD;
Criação das funções de manipulação dos livros;
Estruturação dos arquivos do projeto.
Geração de Código

Através da IA foram produzidos:

HTML da aplicação;
Estilos CSS;
Estrutura JavaScript;
Organização das camadas.
Documentação

A IA foi utilizada para gerar:

README do projeto;
Documentação técnica;
Fluxos da aplicação;
Plano de testes.
Suporte Técnico

Durante o desenvolvimento a IA foi utilizada para auxiliar na resolução de problemas como:

Instalação de Python;
Criação de ambiente virtual;
Configuração do Git;
Integração com GitHub;
Publicação do projeto.
5. Principais Dificuldades Encontradas
Configuração do Ambiente Python

Inicialmente o projeto foi concebido utilizando:

Python
FastAPI
SQLAlchemy
SQLite

Durante os testes foi identificado que o ambiente local não possuía o Python configurado corretamente.

Erro encontrado:

Plain Text
Python was not found

Foi necessário:

Verificar instalação;
Configurar PATH;
Corrigir execução do pip.
Configuração do GitHub

Foi necessário:

Criar chave SSH;
Configurar autenticação;
Resolver conflitos entre repositório local e remoto.

Erro encontrado:

Plain Text
failed to push some refs

A solução envolveu sincronizar o repositório local com o remoto utilizando comandos Git.

6. Onde Mais a IA Foi Utilizada

Além da geração de código, a IA foi empregada em:

Arquitetura

Definição das camadas:

Plain Text
API
Service
Repository
Model
Testes

Criação dos cenários de validação.

Documentação

Produção das descrições técnicas e funcionais.

Design

Definição:

Cores;
Layout;
Organização visual da interface.
Resolução de Problemas

Apoio na investigação de erros de:

Git;
Python;
VS Code;
Navegador.

7. Plano de Testes
Objetivo

Garantir que todas as funcionalidades do sistema estejam operando corretamente.

CT01 – Cadastro de Livro
Objetivo

Validar a criação de um novo livro.

Entrada
Plain Text
Título: Clean Code
Autor: Robert Martin
Resultado Esperado
Plain Text
Livro incluído na lista.
Status

✅ Aprovado

CT02 – Listar Livros
Objetivo

Validar a exibição dos livros cadastrados.

Procedimento

Cadastrar dois livros.

Resultado Esperado
Plain Text
Lista exibe os dois registros.
Status

✅ Aprovado

CT03 – Alterar Status
Objetivo

Validar alteração entre:

Plain Text
NAO_LIDO

e

Plain Text
LIDO
Resultado Esperado

O status deve ser atualizado corretamente.

Status

✅ Aprovado

CT04 – Excluir Livro
Objetivo

Validar remoção de um livro.

Resultado Esperado
Plain Text
Livro removido da tabela.
Status

✅ Aprovado

CT05 – Persistência Local
Objetivo

Validar armazenamento no LocalStorage.

Procedimento

Cadastrar livros e atualizar a página.

Resultado Esperado
Plain Text
Dados permanecem disponíveis.
Status

✅ Aprovado

CT06 – Campos Obrigatórios
Objetivo

Garantir que não sejam aceitos registros vazios.

Entrada
Plain Text
Título vazio
Autor vazio
Resultado Esperado

Mensagem de validação.

Status

✅ Aprovado

CT07 – Interface Responsiva
Objetivo

Validar exibição em diferentes dimensões de tela.

Resultado Esperado

Layout permanece utilizável.

Status

✅ Aprovado

8. Conclusão

O MVP desenvolvido atingiu seu objetivo principal de demonstrar a implementação de uma aplicação web simples para controle de livros lidos e pendentes. O projeto utilizou conceitos de arquitetura em camadas, boas práticas de organização de código e uso intensivo de Inteligência Artificial durante as etapas de planejamento, desenvolvimento, documentação e resolução de problemas.

A solução possui baixo custo de manutenção, facilidade de uso, rápida execução e potencial para crescimento futuro através da integração com APIs, bancos de dados relacionais e serviços avançados de Inteligência Artificial.
