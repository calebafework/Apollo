require('dotenv').config();
const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const ctrl = require('./controllers');
const sequelize = require('./utils/database'); //database initializations
const Comment = require('./models/comment'); //REQUIRED even if IDE says not used!

const port = process.envPORT || 4000;
const app = express();

app.use(express.json());

const corsOptions = {
    // from which URLs do we want to accept requests
    origin: ['http://localhost:3000'],
    credentials: true, // allow the session cookie to be sent to and from the client
    optionsSuccessStatus: 204,
};

app.use(cors(corsOptions));
app.use('/api/v1/comment', routes.comment);

(async () => {
    try {
        await sequelize.sync(
            { force: false }, //Reset db every time
        );
        app.listen(process.env.EXTERNAL_PORT); //DEF in docker-compose.yml
    } catch (error) {
        console.log(error);
    }
})();
