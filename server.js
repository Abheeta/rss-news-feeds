const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const router = express.Router();
require("dotenv").config({ path: "./config.env" });


const feedsRouter = require('./routes/feedsRoutes');
const favouriteRouter = require('./routes/favouriteRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

feedsRouter(router);
favouriteRouter(router);
viewRouter(router);

app.use('/', router);

app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.static('./public'));

app.listen(3000, ()=>{
    console.log(process.env.MONGO_URI)
    mongoose.connect(process.env.MONGO_URI, () =>{
        
        console.log(mongoose.connection.readyState)
    })
    console.log("Listening on PORT 3000");
});





// 

  


