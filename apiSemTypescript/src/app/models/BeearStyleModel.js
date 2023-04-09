const { Model, DataTypes } = require('sequelize');

class BeearStyleModel extends Model {
    static init(sequelize){
        super.init({
            style: DataTypes.STRING,
            maxtemperature: DataTypes.INTEGER,
            mintemperature: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'BeerStyles'
        })
    }
}

module.exports = BeearStyleModel;