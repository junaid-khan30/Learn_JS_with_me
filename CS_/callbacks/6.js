var axios = require("axios");
axios.get("https://dummyjson.com/products/category/smartphones")
.then((res)=>{
    var products = res.data.products;
    products.sort((a,b)=>b.rating - a.rating);
    console.log(products[0].images);
    
   
})
.catch((err)=>{
    console.log(err);
})