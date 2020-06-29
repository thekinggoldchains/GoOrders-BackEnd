import Orders from '../models/Orders'
import OrderItem from '../models/OrderItem'
import Products from '../models/Products'

class OrderController {
    async store(req, res) {
        const { tipo_pagamento, troco, status, produtos } = req.body;
        const orderItens = [];

        for (let i = 0; i < produtos.length; i++) {
            const produto = await Products.findOne({ where: { id: produtos[i].id } });
            const orderItem = { 
                product_id: produto.id,
                preco: parseFloat(produto.preco), 
                quantidade: produtos[i].quantidade,
                obs: produto.obs
            }
            orderItens.push(orderItem);
        }

        const multiplicaProduto = produto => produto.quantidade * produto.preco;
        const getPrecoFinal = (acumulador, atual) => acumulador + atual;
        const precoFinal = orderItens.map(multiplicaProduto).reduce(getPrecoFinal, 0);

        const order = await Orders.create({
            user_id: req.userId,
            tipo_pagamento,
            troco,
            status,
            precoFinal,
            itens: orderItens
        }, {
            include: [{ model: OrderItem, as: 'itens' }] 
        })

        return res.json(order)
    }

}

export default new OrderController()