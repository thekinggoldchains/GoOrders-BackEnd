import Sequelize, {Model} from 'sequelize'

class OrderItens extends Model {
    static init(sequelize) {
        super.init({
            preco: Sequelize.FLOAT,
            quantidade: Sequelize.STRING,
            obs: Sequelize.STRING,
            
        }, 
        {
            sequelize,
        }
        )
        return this
    }

    static associate(models) {
        this.belongsTo(models.Order, {foreignKey: 'id', as: 'order'});
        this.hasOne(models.Products, {foreignKey: 'id', as: 'product'});

      }

}

export default OrderItens