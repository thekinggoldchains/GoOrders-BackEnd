import Sequelize, {Model} from 'sequelize'

class OrderItem extends Model {
    static init(sequelize) {
        super.init({
            preco: Sequelize.FLOAT,
            quantidade: Sequelize.STRING,
            obs: Sequelize.STRING,
        }, { sequelize, modelName: 'order_item', freezeTableName: true })
        return this
    }

    static associate(models) {
        this.belongsTo(models.Order, { foreignKey: 'order_id', as: 'order' });
    }
}

export default OrderItem