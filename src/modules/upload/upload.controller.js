const multer = require("multer");
const { HttpException } = require("../../errors");
const path = require("path");

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, process.env.IMG_STORAGE_PATH);
    },
    filename: function (req, file, cb) {
        const random_string = Math.random().toString(36).substring(2, 15);
        cb(null, Date.now() + "_" + random_string + "_" + file.originalname);
    },
});
const uploadMiddleware = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 },
}).array("file", 6);
const upload = async (req, res, next) => {
    try {
        await new Promise((resolve, reject) => {
            uploadMiddleware(req, res, async function (err) {
                if (err instanceof multer.MulterError) {
                    reject(
                        new HttpException(
                            400,
                            "Multer error occurred: " + err.message
                        )
                    );
                } else if (err) {
                    reject(
                        new HttpException(
                            500,
                            "Something went wrong: " + err.message
                        )
                    );
                }
                console.log(req.files);
                if (!req.files) {
                    reject(new HttpException(400, "No file uploaded."));
                }
                //  console.log(req.file);
                resolve();
            });
        });
        res.status(200).json({
            message: "File uploaded successfully.",
            // storage_path: req.file.path,
            // api_path: process.env.IMG_BASE_URL + req.file.filename,
            upload_count: req.files.length,
            uploads: req.files.map((file) => {
                return {
                    file_name: file.originalname,
                    stored_as: file.filename,
                    storage_path: file.path,
                    api_path: path.join(process.env.IMG_BASE_URL, file.path),
                };
            }),
        });
    } catch (err) {
        next(err);
    }
};
module.exports = {
    upload,
};
