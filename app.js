const express = require('express');
const path = require('path');
const fs = require('fs');
const port = 8000;
const app = express();

app.use("/static",express.static('static'));
app.use(express.urlencoded());

app.set('view engine','pug');
app.set('views',path.join(__dirname,'views'));

app.get("/contact",(req,res)=>{ 
    const params = {}
    res.status(200).render("contact.pug", params);
});

app.get("/login",(req,res)=>{ 
    const params = {}
    res.status(200).render("login.pug", params);
});

app.get("/",(req,res)=>{ 
    const params = {}
    res.status(200).render("home.pug", params);
});

//Start the server
app.listen(port,()=>{
    console.log(`The application started sucessfully on port ${port}`);
});
