const express = require('express');
const productRoute = require('./route/products');
const app = express();
const mongoose = require('mongoose');
var bodyParser = require('body-parser');
const cors = require('cors');
// const port = 3000;

mongoose.connect('mongodb+srv://dryasbk:eb70zplwwtBTIFBY@dryasbkcluster.9r0dzkz.mongodb.net/?retryWrites=true&w=majority',
{
    useNewUrlParser: true,
    useUnifiedTopology: true 
});

const connection = mongoose.connection;
connection.on('connected',()=>{console.log("connected with cloud")});
connection.on('error',()=>{console.log("error with cloud")});


app.use([bodyParser.urlencoded({extended: true}),express.json()]);
app.use(cors());

app.use('/products', productRoute);

var port = process.env.PORT || 8080;
app.listen(port, ()=>{
    console.log("It is working ...");
})
 
module.exports = app;