const {Favourite} = require('../model/favouritesModel');

exports.getFavourites = (req,res) => {
    Favourite.find((err,result)=>{
        if(err) console.log(err);
        res.status(200).json(result);
    })
}

exports.createFavourites = (req,res) => {
    console.log(req.body)
    Favourite.findOne(req.body, (err,result)=>{
        if(err) console.log(err);
        if(result) {
            res.status(409).json({
                err: "News item is already in favourites"
            })
        }
        else {
            
            Favourite.create(req.body)
            .then(result => {
                res.status(200).json(result);
            })
        }
    })
  
}




