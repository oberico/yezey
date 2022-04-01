# YEZEY SHOE STORE 

# PASSOS

1. Instalando ferramentas
2. Criando a aplicação em react
3. Criando um repositório no github
4. Lista tênis
    1. criando uma lista de produtos (array list)
    2. adicionando imagens dos produtos
    3. renderizando os produtos
    4. estilizando os produtos

5. Adicionar rotas
    1. npm i react-router-dom  
    2. criando rota para página inicial (home)
    3. criando rota para página de produtos

6. Criar um servidor com Node.JS
    1. npm init na pasta raíz
    2. Atualizar o packgage.json para :module
    3. Adicionar .js(.jsx) para importar
    4. npm install express
    5. criar server.js
    6. adicionar comando start para node backend/server.js
    7. requisitar o express
    8. criar rota para / pasta raíz retornando o backend quando preparado
    9. mover products.jsx do frontend para o backend
    10. criar rotas para /api/products
    11. retornar produtos
    12. run npm start

7. Buscar produtos do backend
    1. configurar um proxy no package.json
    2. npm install axios
    3. usar state hook
    4. usar efect hook
    5. usar reducer hook

8. Gerenciar estado usando reducer hook
    1. definir o reducer
    2. atualizar a busca de dados
    3. pegar o estado (get state) de usReducer

9. Adicionar Bootstrap
    1. npm install react-bootstrap bootstrap@5.1.3
    2. atualizar App.js

10. Criando produto e componente de avaliações
    1. criar o componente de avaliação
    2. criar o componente do produto
    3. usar o compronente de avaliação no componente de produto

11. Criar tela de detalhes do produto
    1. buscar produto direto do backend
    2. criar 3 colunas para imagem, info e ação

12. Criar componentes de carregamento e mensagem
    1. criar compontende de carregamento (loading)
    2. usar o componente spinner
    3. criar um componente de mensagem
    4. criar utils.js para definir a função getError

13. Implementar "Adicionar ao carrinho"
    1. Criando react context
    2. definindo reducer
    3. criando fornecedor da loja
    4. implementando o botão e o manipulador de adicionar ao carrinho 

14. Melhorar adicionar ao carrinho
    1. checar se o item já existe no carrinho
    2. checar a quantidade em estoque no backend

15. Criar tela do carrinho
    1. cirar duas colunas
    2. mostrar uma lista de itens
    3. criar a coluna de ação

16. Completar a tela do carrinho
    1. clique no controlador para incrementar/decrementar itens
    2.  clique no controlador para remover itens
    3.  clique no controlador para continuar para compra