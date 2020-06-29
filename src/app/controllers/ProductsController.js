import Products from '../models/Products'

import File from '../models/File'


class ProductsController {
    async index(req, res) {
        const listar = await Products.findAll({
            attributes: ['id', 'titulo', 'descricao', 'preco', 'foodavatar_id'],
            include: [{
                model: File,
                as: 'avatar',
                attributes: ['name','path', 'url']
            }],
        })

        return res.json(listar)
    }

    async store(req, res) {
        const { id, titulo, tipo, descricao, estoque, preco } = await Products.create(req.body);

        return res.json({ id, titulo, tipo, descricao, estoque, preco });
    }

    async update(req, res) {

    }
}

export default new ProductsController()