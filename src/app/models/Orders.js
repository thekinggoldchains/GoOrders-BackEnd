import Sequelize, { Model } from 'sequelize'
import OrderItem from './OrderItem'

class Order extends Model {
    static init(sequelize) {
        super.init({
            tipo_pagamento: Sequelize.STRING,
            troco: Sequelize.VIRTUAL,
            status: Sequelize.STRING,
            precoFinal: Sequelize.FLOAT,
            include: [ OrderItem ],
        }, { sequelize })
        return this
    }

    static associate(models) {
        this.belongsTo(models.User, { foreignKey: 'user_id', as: 'user' });
        this.hasMany(models.order_item, { foreignKey: 'order_id', as: 'itens' });
    }
}

export default Order