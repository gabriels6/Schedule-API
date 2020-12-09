const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('dotenv').config({path: __dirname + '/.env'});
const app = express();

const config = {
    url:'mongodb+srv://db_test_user:hlm2543V@cluster-test.q4jsk.gcp.mongodb.net/test_data?retryWrites=true&w=majority'
}

mongoose.connect(config.url,
    {
        useNewUrlParser:true,
        useUnifiedTopology:true
});

app.use(cors());
app.use(express.json());
app.use(routes);
app.listen(process.env.PORT || 3333);