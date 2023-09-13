const express = require('express')
const format = require('date-format')

const app = express()

const PORT = 4000 || process.env.PORT;

app.get("/", (req, res)=>{
    res.send("<h1>Hello from Deepti<h1>");
});

app.get("/api/v1/instagram", (req,res)=>{
    const instaSocial = {
username: "deepti",
followers: 66,
follow: 77,
date: format.asString("dd[MM] hh:mm:ss", new Date()),
    };
    res.status(200).send(instaSocial);
});
app.get("/api/v1/facebook", (req,res)=>{
    const instaSocial = {
username: "deepti",
followers: 86,
follow: 47,
date: format.asString("dd[MM] hh:mm:ss", new Date()),
    };
    res.status(200).send(instaSocial);
});
app.get("/api/v1/linkedin", (req,res)=>{
    const instaSocial = {
username: "deepti",
followers: 236,
follow: 377,
date: format.asString("dd[MM] hh:mm:ss", new Date()),
    };
    res.status(200).send(instaSocial);
});

app.listen(PORT, ()=>{
    console.log(`server is listening at ${PORT}`);
    console.log(`server is listening at http://localhost//4000`);

})
