const express = require('express');
const app = express();
//const config = require('./config');
require('dotenv').config()

app.use(express.static('./public'));

app.listen(process.env.PORT, () => {
    console.log(`Server on port ${process.env.PORT} http://${process.env.HOST}:${process.env.PORT}`);
})