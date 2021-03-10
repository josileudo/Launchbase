const express = require("express")
const nunjucks = require("nunjucks")

const server = express()
const prep = require("./data")

server.use(express.static("public"))

server.set("view engine", "njk")

nunjucks.configure("views",{
  express: server,
  autoescape: false,
  noCache: true
})

server.get("/", function(req, res) {
  return res.render("layout")
})

server.get("/about", function(req, res){
  const about = {
    img_url:"https://pbs.twimg.com/profile_images/1291682473592659968/sEorc6oh_400x400.jpg",
    title: "Rocketseat",
    role: "Uma empresa responsável por te colocar no próximo nível",
    topic: "Principais Tecnologias",
    techs: [
      {name: "React Native"},
      {name: "Node.js"},
      {name: "React.js"},
    ],
    links: [
      {name: "Github" , url: "https://github.com/Rocketseat"},
      {name: "Instagram" , url: "http://instagram.com/rocketseat_oficial"},
      {name: "Facebook" , url: "http://fb.com/rocketseat"}
    ]
  }

  return res.render("about", {about})
})

server.get("/courses", function(req, res) {
  return res.render("courses", {items: prep})
})

server.use(function(req, res){
  res.status(404).render("not-found")
})

server.listen(3000, function(){
  console.log("server is runnig")
})