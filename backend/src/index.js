const express = require('express');
const cors = require('cors');
const Categories = require('./models/Category') 
const mongoose = require('mongoose');
const app = express();
const signingRoutes = require('./routes/signing/main')
const env = require('dotenv').config()
const productRoutes = require('./routes/products/products')
const categoriesRoutes = require('./routes/categories/categories')


app.get('/src/app.js', (req, res, status)=>{
    return res.status(200).json({
        "message": "Hello world!"
    });
});

app.use(cors());
app.use(express.json());

mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.vzcpo.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,
{
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(result=>{
    console.log('database connected')
}).catch(err=>{
    console.log(err);
});

app.use('/', signingRoutes)
app.use('/products', productRoutes)
app.use('/categories', categoriesRoutes)
app.listen(3000);
