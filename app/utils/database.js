const Sequelize = require('sequelize');

//GET ENV VARIABLES FROM
const sequelize = new Sequelize(
    process.env.PGDATABASE,
    process.env.PGUSER,
    process.env.POSTGRES_PASSWORD,
    {
        host: process.env.PGHOST,
        dialect: 'postgres',
    },
);

module.exports = sequelize;
