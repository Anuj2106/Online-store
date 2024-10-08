const Add Product = async ()=>{
    console.log(productDetails);
    let responseData;
    let product = productDetails;
let responseData;
let product = productDetails;
let formData = new FormData();
formData.append('product', image);
await fetch('http://localhost:4000/upload', {
method: 'POST',
headers: {
Accept: 'application/json',
},
body: formData
}