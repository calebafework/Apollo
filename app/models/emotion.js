const Sequelize = require('sequelize');
const db = require('../utils/database');

const Emotion = db.define('emotion', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    mood: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Emotion;
