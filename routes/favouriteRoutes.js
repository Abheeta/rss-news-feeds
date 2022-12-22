const favouriteController = require('../controllers/favouritesController');

module.exports = (router)=>{
    router.get('/api/favourites', (req, res) => favouriteController.getFavourites(req, res) )

    router.post('/api/favourites', (req, res) => favouriteController.createFavourites(req, res) )

}