const express = require('express')
const app = express()

const PORT = 3000


app.listen(PORT, () => {
    console.log("server listening on port : ",PORT);
})


app.get("/", (req, res) => {
    console.log("default page");
    res.send({message:"default page response"})
})
app.get("/yes", (req, res) => {
    console.log("yes page");
    res.send({message:"default page response is yes"})
})
app.get("/no", (req, res) => {
    console.log("no page");
    res.send({message:"default page response is no"})
})