const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost:27017/ecommerce', function(err, result){
    if(err){
        console.log("database error")
    }
    else {
        console.log("Database connection successful")
}
})

const Product = require("../models/product")

const products = [
    new Product({
        imagePath: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHalo_4&psig=AOvVaw3vWRMkeasHkCTEZKmSypau&ust=1591791817172000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCID5s-Hc9OkCFQAAAAAdAAAAABAD",
        title: 'Samsung S20 ',
        description: '128 GB, 8 GB RAM Cosmic Gray, Smartphone',
        price: 47599
    }),
    new Product({
        imagePath: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHalo_4&psig=AOvVaw3vWRMkeasHkCTEZKmSypau&ust=1591791817172000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCID5s-Hc9OkCFQAAAAAdAAAAABAD",
        title: 'Apple iPhone 11 Pro Max',
        description: '64 GB, Space Grey, Smartphone',
        price: 105200
    }),
    new Product({
        imagePath: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHalo_4&psig=AOvVaw3vWRMkeasHkCTEZKmSypau&ust=1591791817172000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCID5s-Hc9OkCFQAAAAAdAAAAABAD",
        title: 'Vivo Y50 128 GB',
        description: '8 GB RAM, Iris Blue, Smartphone',
        price: 43000
    }),
    new Product({
        imagePath: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHalo_4&psig=AOvVaw3vWRMkeasHkCTEZKmSypau&ust=1591791817172000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCID5s-Hc9OkCFQAAAAAdAAAAABAD",
        title:'Realme 6i',
        description: '64 GB, 6 GB RAM, Eclipse Black, Smartphone',
        price: 23000
    }),
    new Product({
        imagePath: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FHalo_4&psig=AOvVaw3vWRMkeasHkCTEZKmSypau&ust=1591791817172000&source=images&cd=vfe&ved=0CAIQjRxqFwoTCID5s-Hc9OkCFQAAAAAdAAAAABAD",
        title: 'Dell 39.62 cm (15.6 inch) Laptop',
        description: 'AMD R3/2.0 GHz/4 GB/1 TB',
        price: 64250
    }),
    new Product({
        imagePath: "https://www.reliancedigital.in/medias/Acer-UN-HS5SI-007-Laptops-491838435-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w0NTI0MjV8aW1hZ2UvanBlZ3xpbWFnZXMvaDcyL2g2Zi85MzI4NjIzNTUwNDk0LmpwZ3wxZDE3MTdlMzI3ZWQzNjQyZGI2YWZjZGJhODMwOWE3NWM1YmY5ZGI4MTM1MzNkNzE3OGU0OTAwZmVlMGM2Y2Yx",
        title: 'Acer A315-56 Aspire 3 Thin Laptop ',
        description: '10th Gen Intel Core i3-1005G1/4 GB/1 TB HDD/Integrated Graphics/Windows 10/MSO/FHD',
        price: 34990
    }),
    new Product({
        imagePath: "https://www.reliancedigital.in/medias/Lenovo-81WE007VIN-Laptops-491894115-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzNjg4ODJ8aW1hZ2UvanBlZ3xpbWFnZXMvaDZiL2hiYS85MzI4NjQxMDQ4NjA2LmpwZ3w1MTYyMmI3NzBjNGViYmQyNmEzZTBmNDQxZmEyYmNjNjNiN2FjYmY1YjA4Yjg0MzllNmNlMWMyYTRkYWUwYmJm",
        title: 'Lenovo 7VIN Ideapad Slim 3 Laptop ',
        description: '10th Gen Intel Core i3-1005G1/4 GB/1 TB HDD/Intel UHD Graphics/Windows 10/MSO/FHD',
        price: 35499
    }),
    new Product({
        imagePath: "https://www.reliancedigital.in/medias/HP-3C464PA-ACJ-Laptops-491894103-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wzODQ1NDZ8aW1hZ2UvanBlZ3xpbWFnZXMvaGQyL2g3Yi85MzExNDEzNzY0MTI2LmpwZ3wwMDExNDlmNDRhOWNlZDdiYzJhNjg4N2I5MDVmZTI0MmE2YmY1MjJmYzFiNzBlMzc4ZTEzYTVkYjRhYzkyOTEz",
        title: 'HP 14S-ER0002TU Laptop',
        description: '10th Gen Core i3-1005G1/4GB/1TB HDD/Windows 10/MSO/FHD',
        price: 40499
    }),
    
]

var done = 0

for(var i=0;i<products.length;i++){
    products[i].save(function(err, result){
        if(err){
            console.log("error")
        }
        done++
        if(done==products.length){
            exit()
        }
    });
}

function exit(){
    mongoose.disconnect()
}
