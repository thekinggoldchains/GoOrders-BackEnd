import Sequelize, { Model } from 'sequelize'

class Products extends Model {
    static init(sequelize) {
        super.init({
            titulo: Sequelize.STRING,
            tipo: Sequelize.STRING,
            descricao: Sequelize.STRING,
            estoque: Sequelize.INTEGER,
            preco: Sequelize.STRING,
        },
            {
                sequelize,
            }
        )
        return this
    }

    static associate(models) {
        this.belongsTo(models.File, { foreignKey: 'foodavatar_id', as: 'avatar' });
        this.hasMany(models.order_item, { foreignKey: 'product_id', as: 'order_item' });
    }
}

export default Products