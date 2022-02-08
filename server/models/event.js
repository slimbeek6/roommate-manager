module.exports = function(sequelize, DataTypes) {
    const Event = sequelize.define("Event", {
        eventName: {
            type: DataTypes.STRING,
            allowNull: false
        },
        eventDate: {
            type: DataTypes.DATEONLY,
            allowNull: false
        }
    });


    Event.associate = function(models) {
        Event.belongsTo(models.Home);
    };

    return Event;
};