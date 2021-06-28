const express = require("express")
const bodyParser = require("body-parser")
const session = require("express-session")
const cookieParser = require('cookie-parser')
const flash = require('connect-flash')
const mongoose = require('mongoose')
const path = require('path')
const routes = require('./routes/index')
const userRoutes = require('./routes/user')
const productRoutes = require("./routes/products")
const passport = require('passport')
const MongoStore = require('connect-mongo')(session)

const app = express()

mongoose.connect('mongodb://localhost:27017/ecommerce',{
    useNewUrlParser: true, useUnifiedTopology: true
}, function(err, result){
    if(err){
        console.log(err)
    }else {
        console.log("Database connection successful")
}
});

require('./config/passport')

app.use(flash())
app.use(cookieParser())
app.use(session({ 
    secret: 'ssshhhhh', 
    saveUninitialized: false, 
    resave: false,
    store: new MongoStore({
        mongooseConnection: mongoose.connection
    }),
    cookie: {
        maxAge: 180 * 60 * 1000
    }  
}))
app.set('view engine', 'ejs')
app.use(flash())

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.json())
app.use(passport.initialize())
app.use(passport.session())



app.use(function(req, res, next){
    res.locals.login = req.isAuthenticated()
    res.locals.session = req.session
    next()
})

app.use('/user', userRoutes)
app.use('/', routes)
app.use('/products', productRoutes)

app.listen(8000, function(){
    console.log('server started')
})