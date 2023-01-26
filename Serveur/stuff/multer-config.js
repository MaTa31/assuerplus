const multer = require('multer');
const MIME_TYPES = {
  'image/jpg': 'jpg',
  'image/jpeg': 'jpg',
  'image/png': 'png',
  'application/pdf': 'pdf'

};

const storage = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, 'upload');
  },


  filename: (req, file, callback) => {
    const name = file.originalname.split(' ').join('_');
    const extension = MIME_TYPES[file.mimetype];
    callback(null, name + Date.now() + '.' + extension);
  }
});

const Multerupload = multer({ storage: storage }).array('file',8);

/* const Multerupload = multer({ storage: storage }).fields([{name: 'carte_verte'},{name: 'constat'},{name: 'photos', maxCount: 6 }]) */

module.exports = { Multerupload }