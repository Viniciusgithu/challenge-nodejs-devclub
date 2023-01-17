<h1 align="center">
Desafio Dev Club
</h1>

<h2 align="center">
  Desafio Node.JS
</h2>
<br>

## 🚀 Sobre o desafio

Crie uma aplicação que fará o cadastro dos pedidos de uma hamburgueria, e você deve utilizar [Node](https://nodejs.org/en/) e [Express](https://expressjs.com/pt-br/).
<br><br>

### ⏩ Rotas

- 🚩 `GET /order`: Rota que lista todos os pedidos já feitos.

-  🚩 `GET /order/:id`: Essa rota recebe o `id` nos parâmetros e deve retornar um pedido específico.

- 🚩 `POST /order`: A rota deve receber o `pedido do cliente`, o `nome do cliente` e `o valor do pedido`, essas informações devem ser passadas dentro do corpo(body) da requisição, e com essas informações você deve registrar o novo pedido dentro de um array no seguinte formato: `{ id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8", order: "X- Salada, 2 batatas grandes, 1 coca-cola", clientName:"José", price: 44.50, status:"Em preparação" }`. Não se esqueça que o ID deve ser gerado por você, dentro do código utilizando UUID V4, assim que o pedido é criado, você deve sempre colocar o status como "Em preparação".

- 🚩 `PUT /order/:id`: Essa rota deve alterar um pedido já feito. Pode alterar,um ou todos os dados do pedido.O `id` do pedido deve ser enviado nos parâmetros da rota.

- 🚩 `DELETE /order/:id`: Essa rota deve deletar um pedido já feito com o `id` enviado nos parâmetros da rota.

- 🚩 `PATCH /order/:id`: Essa rota recebe o `id` nos parâmetros e assim que ela for chamada, deve alterar o status do pedido recebido pelo id para "Pronto".
<br><br>

### ⚠️ Exemplo

Se eu chamar a rota `POST /order` repassando `{ order: "X- Salada, 2 batatas grandes, 1 coca-cola", clienteName:"José", price: 44.50 }`,
o array deve ficar assim:

```js
[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Em preparação"
  }
];
```
<br><br>

Se eu chamar a rota `PATCH /order/ac3ebf68-e0ad-4c1d-9822-ff1b849589a8`,
o array deve ficar assim:

```js
[
  {
    id: "ac3ebf68-e0ad-4c1d-9822-ff1b849589a8",
    order: "X- Salada, 2 batatas grandes, 1 coca-cola",
    clienteName:"José", 
    price: 44.50,
    status:"Pronto"
  }
];
```
<br><br>
### ⏩ Middlewares

- Crie um middleware que será utilizado em todas rotas que recebem o parâmetro ID, então ele deve verificar se o ID passado existe. Se não existir retorne um erro, caso contrário permita a requisição continuar normalmente;

- Crie um middleware que é chamado em todas requisições que tenha um console.log que mostra o método da requisiçao(GET,POST,PUT,DELETE, etc) e também a url da requisição.
<br><br>
### ⚠️ Exemplo
[GET] - /order

## 📅 Entrega

Após finalizar o desafio, suba o projeto para o seu github e compartilhe no Club, para todos verem que você conseguiu.


Feito com ♥ by Code Club - Rodolfo Mori