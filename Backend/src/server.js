const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const UsersRoutes = require('../routes/Users');
const mongoose = require('mongoose');
const uploadRoutes = require('../routes/uploadAndSend')






require('dotenv').config();


const app = express();

mongoose.connect(process.env.MONGOOSEAPI,{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

  
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(morgan('combined'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }))
app.use(cors({origin: '*'}));



app.use(UsersRoutes);
app.use(uploadRoutes);





const port = process.env.PORT || 5000;
console.log(process.env.URL)


app.listen(port, err => {
    if (err) {
      throw new Error("Something bad happened...");
    }
  
    console.log(`Server is listening on ${port}`);
  });
