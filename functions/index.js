const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IYabQH0yrwdQqcxFtu6Pq8IQHZRjPm7YELTPbFURF39lGNdPZxL8wPj8UDeRSUl5c8k9mRTq3LIlyub4QxTv3tG00MLEW5Yb9');

// API

// App config
const app = express();

// Middle-wares
app.use(cors({origin: true}));
app.use(express.json());

// API routes
app.get('/', (request, response) => response.status(200).send('hello'));
app.post('/payments/create', async(request,response) => {
    const total = request.query.total;
    console.log('Payment Request is: ', total);
    const paymentIntent = await stripe.paymentIntents.create({
        amount: total,
        currency: "usd",
    });
    //OK, created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret;
    }) 
})

// Listen command
exports.api = functions.https.onRequest(app);
