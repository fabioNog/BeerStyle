const { Model, DataTypes } = require('sequelize');

class BeearStyleModel extends Model {
    static init(sequelize){
        super.init({
            style: DataTypes.STRING,
            temperature: DataTypes.INTEGER,
        }, {
            sequelize,
            tableName: 'beerstyle'
        })
    }
}

module.exports = BeearStyleModel;