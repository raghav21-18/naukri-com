import app from "./app.js";
import cloudinary from "cloudinary";

cloudinary.v2.config({
    cloud_name:process.env.CLOUDINARY_CLENT_NAME,
    api_key:process.env.CLOUDINARY_CLENT_API,
    api_secret:process.env.CLOUDINARY_CLENT_SECRET,
});

app.listen (process.env.PORT, () =>{
    console.log(`Server running on port ${process.env.PORT}`);
})