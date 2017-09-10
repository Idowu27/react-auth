const express = require('express');

const app = express();

//tells the app to look for the static files in these directories
//app.use is for setting up the middleware layer that I want to invoke
//each layer is adding a function that specifically handles something to your flow through the middleware
app.use(express.static('./server/static'));
app.use(express.static('./client/dist'));


//this starts the server
app.listen(3000, () => {
  console.log('The server is running on http://localhost:3000')
})
