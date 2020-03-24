const express = require("express")
const app = express()
const port = process.env.PORT || 5000
app.get('/', (req, res) => {
    return res.send("hello")
})
app.listen(port, () => console.log("server is start"))