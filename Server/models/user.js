module.exports = function(sequelize, DataTypes){
    var user = sequelize.define('user', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT.UNSIGNED
        },
        firstname: {
            allowNull: true,
            type: DataTypes.STRING
        },
        lastname: {
            allowNull: true,
            type: DataTypes.STRING
        },
        password: {
            allowNull: true,
            type: DataTypes.STRING,
            default: NULL
        },
        authToken: {
            type: DataTypes.STRING,
            default: NULL
        },
        logged: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            default: false
        }
    })

    sequelize.sync({
        force: true
    })

    return user;
}