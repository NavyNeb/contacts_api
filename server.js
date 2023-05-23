const express = require('express');
const errorHandler = require('./middleware/errorHandler');
const connectDb = require('./config/dbConncetion');
const dotenv = require('dotenv').config();

connectDb();
const app = express();

const port = process.env.PORT || 8000;

//apply body parser to be able to access request body data
app.use(express.json())

//contact middleware
app.use('/api/contacts', require('./routes/contactRoutes'))

//apply error handler middleware
app.use(errorHandler)

app.listen(port, ()=> {
    console.log(`listening on port ${port}`);
});