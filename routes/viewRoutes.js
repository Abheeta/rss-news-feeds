const { Router } = require("express");
const path = require('path');

module.exports = (router)=>{
    router.get('/', (req, res)=>{
        res.sendFile(path.join(__dirname, '../views/index.html'));
    })
    
    router.get('/details', (req, res)=>{
        res.sendFile(path.join(__dirname, '../views/details.html'));
    
    })

    router.get('/favourites', (req, res) =>{
        res.sendFile(path.join(__dirname, '../views/favourites.html'))
    })

}