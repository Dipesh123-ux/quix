const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose')
const morgan = require('morgan')
const cors = require('cors')

const  app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());


//routes 

const userRoutes = require('./routes/user')
const quizRoutes = require('./routes/quiz')

app.use('/api',userRoutes)
app.use('/api',quizRoutes)



// app.use((req, res, next) => {
//   res.setHeader('Access-Control-Allow-Origin', '*');
//   res.setHeader(
//     'Access-Control-Allow-Methods',
//     'OPTIONS, GET, POST, PUT, PATCH, DELETE'
//   );
//   // res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// });

const port = process.env.port || 8000;

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'))
}

mongoose
  .connect(`${process.env.DATABASE}`,{ useNewUrlParser: true ,useUnifiedTopology: true}
  )
  .then(result => {
    app.listen(port);
  })
  .catch(err => console.log(err));

 
