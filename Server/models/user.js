module.exports = function(sequelize, DataTypes){
    var user = sequelize.define('user', {
        id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: DataTypes.BIGINT.UNSIGNED
        },
        firstname: {
            allowNull: false,
            type: DataTypes.STRING
        },
        lastname: {
            allowNull: true,
            type: DataTypes.STRING
        },
        email: {
            allowNull: false,
            type: DataTypes.STRING
        },
        password: {
            allowNull: false,
            type: DataTypes.STRING
        },
        authToken: {
            allowNull: true,
            type: DataTypes.STRING
        },
        logged: {
            allowNull: false,
            type: DataTypes.BOOLEAN,
            default: false
        }
    })

    return user;
}