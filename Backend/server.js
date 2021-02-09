const express = require ("express") //está indo buscar dentro do node_modules
const nunjucks = require('nunjucks')

const server = express()

server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server
})

server.get("/", function(req, res){
  return res.render("about")
})

server.get("/portfolio", function(req, res){
  return res.render("portfolio")
})

server.listen(5000, function(){ //ele está ounvido uma porta 
  console.log("server is running")
})