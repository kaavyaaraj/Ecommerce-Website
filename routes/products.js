const express = require("express")
const router = express.Router()

const product = require("../models/product")

router.get("/:id", isLoggedIn,function(req, res){
    product.findById(req.params.id, function(err, prod){
        if(err)
            throw err
        console.log(prod)
        res.render("shop/productDes.ejs", {prod: prod})
    })
})

module.exports = router

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect("/user/login")
}