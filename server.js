
import express from "express";
import dotenv from "dotenv";
import colors from "colors";
import expressEjsLayouts from "express-ejs-layouts";
import productRouter from "./routes/product.js";


// environment setup;
dotenv.config();

// PORT Config here;
const PORT = process.env.PORT || 5052;

// init express;
const app = express();

// add static foulder;
app.use(express.static("public"));

// add middleware support ;
app.use(express.json());
app.use(express.text());
app.use(express.urlencoded({ extended : false }));

// set ejs view enging;
app.set("view engine" , "ejs");
app.use(expressEjsLayouts);


// add all routes here;
app.use(productRouter);








// listen server;
app.listen(PORT, () =>{
    console.log(`server is runnig on port ${PORT}`.bgGreen.black);
})