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
        expenseType: {
            type: ENUM,
            values: ["Rent", "Utilities", "Food & Drink", "Other"]
        }
    });

    Expense.associate = function(models) {
        Expense.belongsTo(models.Home);
    };

    return Expense;
};