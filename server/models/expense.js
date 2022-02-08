module.exports = function(sequelize, DataTypes) {
    const Expense = sequelize.define( "Expense", {
        expenseName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        expenseAmount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        expenseDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        incurredBy: {
            type: DataTypes.STRING,
            allowNull: false
        },
        paid: {
            type: DataTypes.BOOLEAN,
            default: false
        },
        paidBy: {
            type: DataTypes.STRING,
            allowNull: true,
            default: null
        }
    });

    Expense.associate = function(models) {
        Expense.belongsTo(models.Home);
    };

    return Expense;
};