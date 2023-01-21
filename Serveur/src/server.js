const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const api = require('../routes/api');
const mongoose = require('mongoose');
/* const axios = require('axios').default; */

const app = express();

mongoose.connect('mongodb+srv://Mickael:fNGepmXuYzf3iQIq@cluster0.vrn9u6h.mongodb.net/?retryWrites=true&w=majority',
  { useNewUrlParser: true,
    useUnifiedTopology: true })
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});


app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cors());


app.use('/', api);






const port = process.env.PORT || 5000;


app.listen(port, err => {
    if (err) {
      throw new Error("Something bad happened...");
    }
  
    console.log(`Server is listening on ${port}`);
  });
