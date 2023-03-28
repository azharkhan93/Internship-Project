require('dotenv').config();
const express = require('express');
const app = express();
const path = require('path');
const cors = require('cors')
const bodyparser = require('body-parser')


app.use(cors());

app.use(express.urlencoded({extended: false}));
// app.use(bodyparser.json())
 app.use(express.json());


app.use(require('./routes/index.js'));

app.use(express.static('public'));






   app.listen(3000);
   console.log('Server on port 3000');