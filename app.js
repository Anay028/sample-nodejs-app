const express = require('express')
const app = express()
app.get("/", (req, res) => {
    res.send("Its working")
})

app.get("/test", (req, res) => {
    res.send("Routes are working!")
})

app.listen(process.env.PORT || 3000, () => console.log("Server Started"))