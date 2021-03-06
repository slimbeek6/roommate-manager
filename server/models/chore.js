module.exports = function(sequelize, DataTypes) {
    const Chore = sequelize.define( "Chore", {
        choreName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        dueDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        assignedTo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        completed: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    });

    Chore.associate = function(models) {
        Chore.belongsTo(models.Home);
    };

    return Chore;
};