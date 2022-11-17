const express = require("express")
const app = express()
const mongoose = require("mongoose")


const config = require("./config.json")

mongoose.connect(config.db)

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error"));
db.once("open", ()=>{
    console.log("connection success")
})

const protuctsRouter = require("./routers/router")
app.use(express.json())

app.use("/", protuctsRouter)

app.listen(config.port, ()=>{
    console.log(`Serwer working on: http://localhost:${config.port}`)
})