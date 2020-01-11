const Express = require("express")
const Route = Express.Router()


Route.use((request, response, next)=>{
    console.log("Kajit ware being used")
    next()
})

Route.get("/", (request, response)=>{
    response.send("/being hit")
})

Route.get("/example", (request, response)=>{
    response.send("/example being hit")
})


module.exports = Route