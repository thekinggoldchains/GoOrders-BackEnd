# GoOrders-BackEnd
API desenvolvida com bases no bootcamp da RocketSeat, para restaurantes e lanchonetes que lidam com pedidos de clientes.


# Rotas da aplicação:

*-----------------------------------------------------------------------------------------*
*/user :*

Métodos STORE, INDEX,  PUT, DELETE -> Cria um usuario e altera com validaçao de dados utilizando o YUP, e por ultimo
deleta da base de dados.

*-----------------------------------------------------------------------------------------*

*/session: *

Método STORE -> Cria uma sessao na aplicaçao e disponibiliza um JWT, utilizado para validar login do usuario.

*-----------------------------------------------------------------------------------------*

*/products: *

Métodos POST, PUT E DELETE -> O usuario pode cadastrar novos produtos e insumos inserir um avatar do alimento que utilizará uma rota separada, bem como excluir os produtos e alterar.

*-----------------------------------------------------------------------------------------*

*/files: *

Métodos POST, INDEX, PUT, DELETE -> Cria, Lista altera e deleta avatar dos produtos.

*-----------------------------------------------------------------------------------------*

*/order: *

Métodos POST, INDEX -> Cria e lista os pedidos.

*-----------------------------------------------------------------------------------------*




