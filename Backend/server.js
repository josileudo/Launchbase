const express = require ("express") //está indo buscar dentro do node_modules
const nunjucks = require('nunjucks')
const videos = require("./data")

const server = express()

server.use(express.static('public'))
server.set("view engine", "njk")

nunjucks.configure("views", {
  express: server,
  autoescape:false,
  noCache: true
})

server.get("/", function(req, res){
  const about= {
    avatar_url: 'https://avatars2.githubusercontent.com/u/48743781?s=400&u=b3328af9a6ad91510c9dc3dc2eebac65a3d5047a&v=4',
    name: 'Josileudo Rodrigues',
    role: 'Aluno - Rocketseat',
    description: `Programador Web Júnior, focado no aprendizado contínuo. Aluno <a href="https://rocketseat.com.br"
    target="blanck">Rocketseat</a>`,
    links: [
      {name: 'Twitter' , url: `https://twitter.com/JosileudoRodri1`},
      {name: 'Github' , url: `https://github.com/josileudo`},
      {name: 'Linkedin' , url: `https://www.linkedin.com/in/josileudo-rodrigues-a83a3b138`}
    ]
  }
  return res.render("about", {about})
})

server.get("/portfolio", function(req, res){
  return res.render("portfolio", {items: videos})
})

server.get("/video", function(req,res){
  const id = req.query.id

  const video = videos.find(function(video){
    return video.id == id
  })

  if (!video){
    return res.send("video not found")
  }

  return res.render("video",{item: video})
})

server.listen(5000, function(){ //ele está ounvido uma porta 
  console.log("server is running")
})