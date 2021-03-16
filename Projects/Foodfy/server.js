const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const mode = require("./data")

server.set("view engine", "njk")

server.use(express.static("public"))

nunjucks.configure("views", {
  express: server,
  autoescape: true,
  noCache: true
})

server.get("/", function(req, res){
  return res.render("about", {items: mode})
})

server.get("/super", function(res, res){
  return res.render("super")
})

server.get("/recipes", function(req, res){
  return res.render("recipes", {items: mode})
})

server.get("/ingredients", function (req, res){
  return res.render("ingredients")
})

server.get("/recipes/:index", function (req, res){
  const recipes = [...mode]
  const recipeIndex = req.params.index

  console.log(recipes[recipeIndex])

  return res.render("recipe", {item: recipes[recipeIndex]})
})

server.listen(5000, function(){
  console.log("server is running")
})