const Sequelize = require('sequelize');
const db = require('../utils/database');

const Comment = db.define('comment', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    content: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    tone: {
        type: Sequelize.STRING,
        allowNull: false,
    },
});

module.exports = Comment;