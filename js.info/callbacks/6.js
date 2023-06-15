var axios = require("axios");
axios.get("https://dummyjson.com/products/category/smartphones")
.then((res)=>{
    var products = res.data.products;
    console.log(products);
    
   
})
.catch((err)=>{
    console.log(err);
})