

// depends
const express = require('express');

const app = express();

app.use(express.static('./public'));


const server = app.listen(8000, () => {
    console.log('app is listening on post 8000')
});

module.exports = server;
