const express = require("express")
const nunjucks = require("nunjucks")

const server = express()

server.set("view engine", "html")

server.use(express.static("public"))

nunjucks.configure("views", {
  express: server,
  autoescape: true,
  noCache: true
})

server.get("/", function(req, res){
  return res.render("about")
})

server.get("/super", function(res, res){
  return res.render("super")
})

server.get("/revenue", function(req, res){
  return res.render("revenue")
})

server.listen(5000, function(){
  console.log("server is running")
})