import { v2 as cloudinary } from "cloudinary";
import "dotenv/config";

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

// 1x1 pixel red PNG, base64 encoded
const testImage = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=";

cloudinary.uploader.upload(testImage, { folder: "rohit-portfolio/test" })
  .then((res) => console.log("UPLOAD SUCCESS:", res.secure_url))
  .catch((err) => console.log("UPLOAD FAILED:", JSON.stringify(err, null, 2)));
