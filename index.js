const express = require("express");
const app = express();
const http = require("http").createServer(app);

var io = require("socket.io")(http);

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.render("index");
});

http.listen(8080, () => {
    console.log("App rodando");
})