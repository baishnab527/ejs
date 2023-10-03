
import fs from "fs";
import { createRandomUniqueId , createSlug } from "../helpers/helper.js";

// create product controllers;
export const createProductData = (req , res) =>{
    const {name , regularPrice , saliePrice , colors , size , weight , brand , stock} = req.body;
    if(!name || !regularPrice || !stock){
        res.status(400).json("Product name , regularPrice , Stock is required");
        return;
    }
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString()); 
    const product = {
        id :createRandomUniqueId(),
        name , 
        slug : createSlug(name),
        regularPrice, 
        saliePrice, 
        colors, 
        size,
        weight,
        brand,
        photo : req.file.filename,
    }
     
    if(productData.some((data) =>data.slug === createSlug(name))){
        res.status(400).json(" This Product Data all readey exist Data base ");
        return;
    }

    productData.push(product);
    fs.writeFileSync("db/product.json" , JSON.stringify(productData));

    res.redirect("/admin");
}

// create Product data;
export const productAdminPanel = (req , res) =>{
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString()); 
    res.render("admin", {
        product : productData,
    });
}

// Creare Product from controllers;

export const createProductForm = (req , res) =>{
    res.render("create");
}


// Single Product Data ;
export const singleProductData = (req , res) =>{
    const {slug}= req.params;
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
    const singleProductview = productData.find((data) =>data.slug === slug); 

    res.render("single" , {
        product : singleProductview,
    });
};



// Delete Route add here;

export const deletProductData = (req , res) =>{
    const {id} = req.params;
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());
    const updateProduct = productData.filter((data) =>data.id !== id);
    fs.writeFileSync("db/product.json" , JSON.stringify(updateProduct));
    res.redirect("/admin");
}


// Crite Shop Page;


export const editProductData = (req, res) =>{
    const {id} = req.params ;
    // Get all produt data ;
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

    // Find all single Product;
    const editProduct = productData.find((data) => data.id === id);
    res.render("edit" , {
        product: editProduct,
    });
}

// Update Product data ;
export const updateProductData = (req , res) =>{
    const {id} = req.params;
    const {name , regularPrice , saliePrice , colors , size , weight , brand , stock} = req.body;
    // Get all product data from data base;
    const productData = JSON.parse(fs.readFileSync("db/product.json").toString());

    // Photo manage;
    let photoName = productData[productData.findIndex((data) =>data.id === id)].photo;
    if(req?.file?.filename){
        photoName = req.file.filename;
    };

    productData[productData.findIndex((data) =>data.id === id)] = {
        id :createRandomUniqueId(),
        name , 
        slug : createSlug(name),
        regularPrice, 
        saliePrice, 
        colors, 
        size,
        weight,
        brand,
        photo : photoName,
    },

    fs.writeFileSync("db/product.json", JSON.stringify(productData));
    res.redirect("/admin")

}



