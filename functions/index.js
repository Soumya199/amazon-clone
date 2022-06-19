const functions = require("firebase-functions");
const express=require("express")
const cors=require("cors")
const stripe=require("stripe")("sk_test_51LAzXuSHstxpudMjGeVaN11AEsf3McGNdyn0xRKZAMz2NHXMqlbLdUQFxUyjEhPmBrkWcOZBCnzFWIGontC12l6100dWhbxooL")



// API

// API CONFIG
const app=express()

// Middlewares
app.use(cors({origin:true}))
app.use(express.json())

// API routes
app.get("/",(req,res)=>{
    res.status(200).send("hello Sardar")
})

app.post('/payments/create',async(req,res)=>{
    const total=req.query.total;
    console.log("total amount", total)

    const paymentIntent= await stripe.paymentIntents.create({
        amount:total,
        currency:"inr"
    });
    // ok 

    res.status(200).send({clientSecret:paymentIntent.client_secret})
})

// Listen command

exports.api=functions.https.onRequest(app)


// API URL 
// http://localhost:5001/clone-1373d/us-central1/api/