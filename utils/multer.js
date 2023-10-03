import multer from "multer";

// create a multer diskStorage;
const storage = multer.diskStorage({
    destination : (req , file , cb) =>{
        if(file.fieldname === "productPhoto"){
            cb(null , "public/product");
        }else if(file.fieldname === "userPhoto"){
            cb(null , "public/user");
        }
        else{
            cb(new Error("Product file destination not found"));
        };
        
    },
    filename : (req , file , cb) =>{
        cb(null , Date.now() + "_" + Math.floor(Math.random() *100000) + "_" + file.originalname);
    },
});


export const createProductMulter = multer({ storage , fileFilter : (req , file , cb) =>{

    if(file.mimetype === "image/jpeg" 
    || file.mimetype === "image/jpg" 
    || file.mimetype === "image/png" 
    || file.mimetype === "image/gif" 
    || file.mimetype === "image/tiff" 
    || file.mimetype === "image/psd" 
    || file.mimetype === "image/eps" 
    || file.mimetype === "image/webp" 
    || file.mimetype === "image/ai" 
    || file.mimetype === "image/raw" 
    || file.mimetype === "image/indd"){
        cb(null , true);

    }else{
        cb(new Error("Invalid File Type"));
        return;
    }
}, }).single("productPhoto");

// create User multer for form data submit;

export const createUserMulter = multer({ storage , fileFilter : (req , file , cb) =>{

    if(file.mimetype === "image/jpeg" 
    || file.mimetype === "image/jpg" 
    || file.mimetype === "image/png" 
    || file.mimetype === "image/gif" 
    || file.mimetype === "image/tiff" 
    || file.mimetype === "image/psd" 
    || file.mimetype === "image/eps" 
    || file.mimetype === "image/ai" 
    || file.mimetype === "image/raw" 
    || file.mimetype === "image/indd"){
        cb(null , true);

    }else{
        cb(new Error("Invalid File Type"));
        return;
    }
}, }).single("userPhoto");

