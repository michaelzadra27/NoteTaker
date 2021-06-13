const express = require('express');
const path = require('path');
//const pageRouter = require('express').Router();
//importing html route file
const htmlRouter = require("./routes/htmlpath")
//importing api routing file
const apiRouter = require("./routes/apicall")




// Sets up the Express App

const app = express();
var PORT = process.env.PORT || 3001;
  



// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//allows the server to look at a static file without throwing an error
app.use(express.static(path.join(__dirname, 'public')))

app.use(apiRouter)
app.use(htmlRouter)














app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
  });
  