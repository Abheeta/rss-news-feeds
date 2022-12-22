const mongoose = require('mongoose');

const favouriteSchema = new mongoose.Schema({
    newsId: String,
    title: String
})

const Favourite = mongoose.model('favourites', favouriteSchema);

module.exports = {
    Favourite
}
