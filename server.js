const path = require('path');
const express = require('express');
const cors = require('cors');

const app = express();

// const dbConnection = require('./config/dbConnection');
const errorHandler = require('./middleware/errorMiddleware')

const exchangeRoute = require('./route/exchangeRoutes');

// dbConnection();

app.use(express.json())
app.use(express.urlencoded({ extended : true }))
app.use(cors());

app.use('/', exchangeRoute)
// app.use('/', (req, res) => {
//     res.send('Backend API Server is running...')
// })

if (process.env.NODE_ENV !== "production") {
    require('dotenv').config();
}

app.use(errorHandler)

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening at port http://localhost:${port}/`));