const bcrypt = require("bcrypt");

module.exports = function(sequelize, DataTypes) {
    const Home = sequelize.define("Home", {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [3]
            }
        },

        password: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6]
            }
        },

        email: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                len: [3],
                isEmail: true
            }
        }
    }, {
        freezeTableName: true,
        instanceMethods: {
            generateHash(password) {
                return bcrypt.hash(password, bcrypt.genSaltSync(8));
            },
            validPassword(password) {
                return bcrypt.compare(password, this.password);
            }
        }
    });

    Home.associate = function(models) {
        Home.hasMany(models.User, {
            onDelete: "cascade",
            foreignKey: {
                name: "HomeId",
                allowNull: false
            }
        });
    };

    Home.associate = function(models) {
        Home.hasMany(models.Event, {
            onDelete: "cascade",
            foreignKey: {
                name: "HomeId",
                allowNull: false
            }
        });
    };

    Home.associate = function(models) {
        Home.hasMany(models.Chore, {
            onDelete: "cascade",
            foreignKey: {
                name: "HomeId",
                allowNull: false
            }
        });
    };

    Home.associate = function(models) {
        Home.hasMany(models.Expense, {
            onDelete: "cascade",
            foreignKey: {
                name: "HomeId",
                allowNull: false
            }
        });
    };

    Home.associate = function(models) {
        Home.hasMany(models.Payment, {
            onDelete: "cascade",
            foreignKey: {
                name: "HomeId",
                allowNull: false
            }
        });
    };

    return Home;
};