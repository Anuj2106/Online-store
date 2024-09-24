const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");
const { log } = require("console");

app.use(express.json());
app.use(cors());

// Update the MongoDB connection string
mongoose.connect('mongodb+srv://cseanuj9505:Anuj%402106@cluster0.c5uzn.mongodb.net/Online-store', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log("MongoDB connected"))
.catch((error) => console.log("MongoDB connection error:", error));

// Basic route
app.get("/", (req, res) => {
    res.send("Express App is Running");
});

// Image Uploader 
const storage = multer.diskStorage({
    destination: "./upload/images", // Where the images will be saved
    filename: (req, file, cb) => {
        cb(null, `${file.fieldname}_${Date.now()}${path.extname(file.originalname)}`);
    }
});

const upload = multer({ storage: storage });

// Serve images statically
app.use('/images', express.static("upload/images"));

// Create an endpoint for image upload
app.post("/upload", upload.single('product'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});

// Schema creation 
const Product = mongoose.model("Product", {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    newPrice: {  // Renamed from 'newPrize'
        type: String,
        required: true,
    },
    oldPrice: {  // Renamed from 'oldPrize'
        type: String,
        required: true,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    available: {
        type: Boolean,
        default: true,
    },
    category: { // Adding 'category' to schema if it is part of the product
        type: String,
        required: false,
    }
});

// Adding a new product
app.post('/addproduct', async (req, res) => {
    let products = await Product.find({});
    let id;
    if (products.length > 0) {
        let last_product = products[products.length - 1];
        id = last_product.id + 1;
    } else {
        id = 1;
    }

    const product = new Product({
        id,
        name: req.body.name,
        image: req.body.image,
        category: req.body.category,
        newPrice: req.body.newPrice,
        oldPrice: req.body.oldPrice,
    });

    console.log(product);
    await product.save();
    console.log("Saved");
    
    res.json({
        success: true,
        product
    });
});

// Removing a product 
app.post("/removeproducts", async (req, res) => {
    await Product.findOneAndDelete({ id: req.body.id });
    console.log("Removed");
    
    res.json({
        success: true,  // Fixed 'sucess' typo
        id: req.body.id
    });
});

// API for all products 
app.get('/allproducts', async (req, res) => {
    let products = await Product.find({});
    console.log('All Products Fetched');
    res.send(products);
});

// Start the server
app.listen(port, (error) => {
    if (!error) {
        console.log("Server Running on port", port);
    } else {
        console.log("Error:", error);
    }
});
