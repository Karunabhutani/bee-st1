

const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productRoutes = require(__dirname + '/Backend/app/routes/productRoutes');
const reviewRoutes = require(__dirname + '/Backend/app/routes/reviewRoutes');



const app = express();
const port = 3000;

mongoose.connect('mongodb://localhost/productCatalog', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(bodyParser.json());

app.use('/api/products', productRoutes);
app.use('/api/reviews', reviewRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

});