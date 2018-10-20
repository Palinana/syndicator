const Sequelize = require('sequelize');
const db = require('../db');

const Event = db.define('event', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    description: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    address: {
        type: Sequelize.TEXT,
        allowNull: false
    },
    price: {
        type: Sequelize.INTEGER,
    },
    startTime: {
        type: Sequelize.DATE,
        allowNull: false
    },
    endTime: {
        type: Sequelize.DATE,
        allowNull: false
    },
    status: {
        type: Sequelize.ENUM ('active', 'closed')
    },
    posted: {
        type: Sequelize.BOOLEAN,
        defaultValue: false
    },
    timeRemaining: {
        type: Sequelize.VIRTUAL,
        get() {
          return this.endTime ? this.endTime - Date.now() : Infinity;
        }
    },
    isActive: {
        type: Sequelize.VIRTUAL,
        get() {
          return this.timeRemaining < 0
        }
    }
});

//Class Method
Event.isPosted = function () {
    return this.update({
        posted: true
    });
};

module.exports = Event;