import Sequelize from 'sequelize'
import User from '../app/models/User'
import File from '../app/models/File'
import Products from '../app/models/Products'
import Orders from '../app/models/Orders'
import OrderItem from '../app/models/OrderItem'
import databaseConfig from '../config/database'

const models = [User, File, Products, Orders, OrderItem ]

class Database {
    constructor(){
        this.init()

    }

    init(){
        this.connection = new Sequelize(databaseConfig)

        models
        .map(model => model.init(this.connection))
        .map(model => model.associate && model.associate(this.connection.models))
    }
}

export default new Database()