// 'use strict';
// const {
//   Model
// } = require('sequelize');
// module.exports = (sequelize, DataTypes) => {
//   class comment extends Model {
//     /**
//      * Helper method for defining associations.
//      * This method is not a part of Sequelize lifecycle.
//      * The `models/index` file will call this method automatically.
//      */
//     static associate(models) {
//       // define association here
//       models.comment.hasMany(models.emotion)
//     }
//   };
//   comment.init({
//     content: DataTypes.STRING
//   }, {
//     sequelize,
//     modelName: 'comment',
//   });
//   return comment;
// };

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
});

module.exports = Comment;