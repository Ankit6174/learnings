const express = require('express');
const dotenv = require('dotenv');   
const upload = require("./models/multer");
// const cloudinary = require("./models/cloudinary");
const getDocuments = require("./models/getDocuments");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.render("Home");
});

// {
//   asset_id: 'c243416bc9c6f33fa4e1cde638f4add2',
//   public_id: 'uploads/t6u2y5rxvr7n7psmw9e6',
//   version: 1767721992,
//   version_id: '3173e00560fcb481f7330d6e00a9a0e6',
//   signature: '1ce7e96ce66ae278dc93866300057868953b602f',
//   width: 612,
//   height: 792,
//   format: 'pdf',
//   resource_type: 'image',
//   created_at: '2026-01-06T17:53:12Z',
//   tags: [],
//   pages: 3,
//   bytes: 186830,
//   type: 'upload',
//   etag: '47db1b503c45ce3b4a8abb5866796b47',
//   placeholder: false,
//   url: 'http://res.cloudinary.com/dzbctdhkj/image/upload/v1767721992/uploads/t6u2y5rxvr7n7psmw9e6.pdf',        
//   secure_url: 'https://res.cloudinary.com/dzbctdhkj/image/upload/v1767721992/uploads/t6u2y5rxvr7n7psmw9e6.pdf',
//   asset_folder: 'uploads',
//   display_name: 't6u2y5rxvr7n7psmw9e6',
//   original_filename: 'f3327a9de05a8294eb8441bfc04a07dd',
//   api_key: '415599941799754'
// }

app.post("/upload", upload.single("file"), async (req, res) => {
//   try {
//     const result = await cloudinary.uploader.upload(req.file.path, {
//       folder: "uploads",
//     });

//     let array_of_documents = await getDocuments(req.file.path);
//     consolel.log(array_of_documents);
//     res.json({
//       success: true,
//       url: result.secure_url,
//     });
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
    try {
        let array_of_documents = await getDocuments(req.file.path);
        console.log(array_of_documents);
    }  catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server running http://localhost:${PORT}`);
});