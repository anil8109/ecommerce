// index.js
const express = require('express');
const imageRoutes = require('./routes/getImages');
const productRoutes = require('./routes/products');
const cardRoutes = require('./routes/card');
const bodyParser = require('body-parser');
const db = require('./models');
const app = express();
const cors = require('cors');


app.use(express.json());
app.use(bodyParser.json())
app.use(cors());
app.use('/api', imageRoutes);
app.use('/api/product', productRoutes);
app.use('/api/card', cardRoutes);

db.sequelize.sync({
    // force: true
}).then(() => {
    console.log('Connected to database');
    
}).catch((err) => {
    console.log('Not connecting', err.message)
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
