const multer = require("multer");
const MIME_TYPES = {
  "image/jpg": "jpg",
  "image/jpeg": "jpg",
  "image/png": "png",
  "application/pdf": "pdf",
};

const maxSize = 25 * 1000 * 1000;
const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, "./upload");
  },

  filename: (req, file, callback) => {
    console.log(req.header("Content-Length"));

    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg" ||
      file.mimetype == "application/pdf"
    ) {
      if (req.header("Content-Length") > maxSize) {
        callback(new Error("Taille du fichier supérieur à 25MB"));
      } else {
        const name = file.originalname.split(" ").join("_");
        callback(null, name);
      }
    } else {
      callback(
        new Error(
          "Seulement les extensions .png, .jpg and .jpeg .pdf sont autorisés"
        )
      );
    }
  },
});

module.exports = multer({ storage: storage }).array("files", 8);

/* const Multerupload = multer({ storage: storage }).fields([{name: 'carte_verte'},{name: 'constat'},{name: 'photos', maxCount: 6 }]) PAS OUF*/
/* const Multerupload = multer({ storage: storage }).any() DANGEREUX*/

/* module.exports = { Multerupload } */
