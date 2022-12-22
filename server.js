const express = require('express');
const cors = require('cors');
const http = require('http');
const path = require('path');
const router = express.Router();

const feedsRouter = require('./routes/feedsRoutes');
const favouriteRouter = require('./routes/favouriteRoutes');
const viewRouter = require('./routes/viewRoutes');

const app = express();

feedsRouter(router);
favouriteRouter(router);
viewRouter(router);

app.use('/', router);

app.use(cors({
    origin: "http://localhost:3000"
}));
app.use(express.static('./public'));

app.listen(3000, ()=>{
    mongoose.connect(process.env.MONGO_URI, {useNewUrlParser:true,useUnifiedTopology:true}, () =>{
        console.log(mongoose.connection.readyState)
    })
    console.log("Listening on PORT 3000");
});





// 

  


