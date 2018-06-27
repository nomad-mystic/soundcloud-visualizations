// Configs
import serverConfig from './config/serverConfig';

// Routes
const router = require(`${process.cwd()}/api/routes/index`);

// depends
const express = require('express');

const app = express();

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use('/api', router);

const server = app.listen(serverConfig.serverPort, () => {
    console.log(`app is listening on post ${serverConfig.serverPort}`);
});

module.exports = server;
