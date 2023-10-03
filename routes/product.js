import { createProductData ,
     productAdminPanel ,
     createProductForm ,
     singleProductData, 
     deletProductData,
     editProductData,
     updateProductData,

    } from "../controllers/productControllers.js"; 
import express from "express";
import { createProductMulter  } from "../utils/multer.js";

// init router;
const router = express.Router();

// add all routes here;
router.post("/product", createProductMulter, createProductData);
router.get("/create" , createProductForm);
router.get("/admin" , productAdminPanel);
router.get("/single/:slug" , singleProductData);
router.get("/delete/:id" , deletProductData);
router.get("/edit/:id" , editProductData);
router.post("/update/:id" , createProductMulter ,updateProductData);



// export default router;
export default router;