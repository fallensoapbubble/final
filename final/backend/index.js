const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = process.env.PORT || 8080;

require('dotenv').config();


app.use(bodyParser.json());
app.use(cors());


app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`)
})

app.get('/', (req, res) => {
    res.send('PiNG');
});

const AuthRouter = require('./routes/AuthRouter.js');
const ProductRouter = require('./routes/ProductRouter.js');



app.use('/auth', AuthRouter);
app.use('/products', ProductRouter);


const mongoose = require('mongoose');

const mongo_url = process.env.MONGO_CONN || "mongodb://localhost:27017/mydb";

mongoose.connect(mongo_url)
    .then(() => {
        console.log('MongoDB Connected...');
    }).catch((err) => {
        console.log('MongoDB Connection Error: ', err);
    })