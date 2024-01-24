//const express = require('express');
//const routes = require('./routes');
// import sequelize connection

//const app = express();
//const PORT = process.env.PORT || 3001;

//app.use(express.json());
//app.use(express.urlencoded({ extended: true }));

//app.use(routes);

// sync sequelize models to the database, then turn on the server
//app.listen(PORT, () => {
  //console.log(`App listening on port ${PORT}!`);
//});



// Import required modules
const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

// Create an Express app
const app = express();
const PORT = process.env.PORT || 3001;

// Set up middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use routes
app.use(routes);

// Sync Sequelize models to the database, then start the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
