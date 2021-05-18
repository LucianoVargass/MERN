const mongoose = require('mongoose');
const URI = 'mongodb://localhost/database';

mongoose.connect(URI)

 .then( db => console.log('DB CONECT'))
 .catch(err => console.log(err))

 module.exports = mongoose;
