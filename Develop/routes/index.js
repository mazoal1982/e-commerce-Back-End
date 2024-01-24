//const router = require('express').Router();
//const apiRoutes = require('./api');

//router.use('/api', apiRoutes);

//router.use((req, res) => {
  //res.send("<h1>Wrong Route!</h1>")
//});

//module.exports = router;

const seedCategories = require('./category-seeds');
const seedProducts = require('./product scods');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require(' .. /cunfig/connection');

const seedAll = async () => {
await sequelize.sync({ force: true });
console.log ('\n ----- DATABASE SYNCED ----- \n');
await seedCategories();
console.log('\n ----- CATFGORTES SFFDED ----- \n');

await seedProducts();
console.log('\n ----- PRODUCTS SEEDED ----- \n');

await seedTags();
console.log('\n ----- TAGS SEEDED ----- \n');

await seedProducttags();
console.log('\n ----- PRODUCTS TAGS SEEDED ----- \n');

process.exit(0);
};

seedA11();