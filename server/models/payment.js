module.exports = function(sequelize, DataTypes) {
    const Payment = sequelize.define( "Payment", {
        amount: {
            type: DataTypes.DECIMAL(10,2),
            allowNull: false
        },
        paymentDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        paidBy: {
            type: DataTypes.STRING,
            allowNull: false
        },
        paymentType: {
            type: ENUM,
            values: ["Rent", "Utilities", "Food & Drink", "Other"]
        }
    });

    Payment.associate = function(models) {
        Payment.belongsTo(models.Home);
    };

    return Payment;
};