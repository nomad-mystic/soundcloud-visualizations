// Configs
import serverConfig from './config/serverConfig';

// depends
const express = require('express');

const app = express();

app.use(express.static('./public'));


const server = app.listen(serverConfig.serverPort, () => {
    console.log(`app is listening on post ${serverConfig.serverPort}`);
});

module.exports = server;
