const Sequelize = require('sequelize');
const db = require('../utils/database');

//how do we know an emotion is related to a comment?
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
});

module.exports = Comment;