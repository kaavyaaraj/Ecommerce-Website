var express = require('express')
var router = express.Router()

var passport = require('passport')

const address =require('../models/address')
const user = require('../models/user')
const addr = require("../models/address")
const fb = require("../models/feedback")



router.get('/register', function(req, res){
    res.render('user/register', { message: req.flash("error")})
})

router.post('/register', passport.authenticate('local.signup', {
    successRedirect: '/user/address',
    failureRedirect: '/user/register',
    failureFlash: true
}))

router.get("/login", function(req, res){
    res.render('user/login', { message: req.flash("error")})
})

router.post("/login", passport.authenticate('local.signin',{
    successRedirect: '/user/profile',
    failureRedirect: '/user/login'
}))
router.get('/profile', isLoggedIn, function(req, res){
    user.findById(req.session.passport.user, function(err, user){
        addr.findById(user.addr[0], function(err, addr){

            res.render("user/profile.ejs",{
                user:user,
                addr: addr,
            })
        })
    })
})


router.get('/faqs', isLoggedIn, function(req, res){
    res.render('user/faqs')
})
router.post('/feedback', isLoggedIn, function(req, res){
    var f = new fb()
    f.feedback = req.body.fb
    f.user = req.session.passport.user
    f.save(function(err, result){
        res.render("user/feedback.ejs")
    })
})


router.get('/contact',function(req,res){
    res.render('user/contact')

})
router.get('/address', isLoggedIn, function(req,res){
    res.render('user/address')

})

router.post('/address', isLoggedIn, function(req,res){
    const addr=new address()
    addr.street=req.body.street
    addr.area=req.body.area
    addr.city=req.body.city
    addr.state=req.body.state
    addr.country=req.body.country
    addr.save(function(err,results){
    user.findById(req.session.passport.user, function(err, user){
        user.addr.push(addr)
        user.save(function(err, result){
            res.redirect("/")})
        })
    })
})

router.get('/logout', isLoggedIn, function(req, res){
    req.logout()
    res.redirect('/')
})


module.exports = router

function isLoggedIn(req, res, next){
    if(req.isAuthenticated()){
        return next()
    }
    res.redirect('/')
}
