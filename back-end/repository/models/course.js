module.exports = function(sequelize, DataTypes) {
    return sequelize.define("Course", {
        id: {
            type: DataTypes.STRING,
            unique: true,
            primaryKey: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        teacher: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dateopen: {
            type: DataTypes.STRING,
            allowNull: false
        },
        status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })
}