const Express = require("express")
const Path = require("path")
const bodyParser = require("body-parser")
const JOI = require("joi")
const app = Express()
const People = require("./Routes/People")



app.use("/public", Express.static(Path.join(__dirname, "static")))
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
//app.use((request, response, next)=>{
//    console.log(request.url, request.method)
//    request.banana = "valueOfBanana"
//    next()
//})

app.use("/People", People)

//app.get("/", (request, response)=> {
//     console.log(request.banana)
//    response.send("middleWare kajit has coins")
//})

//app.set("view engine","ejs")
//app.get("/", (request, response)=> {
//    response.sendFile(Path.join(__dirname, "static", "index.html"))
//})
//app.get("/:userQuery", (request, response)=> {
//    response.render("index", { data: {userQuery: request.params.userQuery ,
//                                      searchResults: ["1", "2", "jadajada"],
//                                      isLoggedIn: true,
//                                      username: "gady lala"}})
//})

//posting data
//app.post("/", (request, response)=>{
//    console.log(request.body)
//    //database work here
//    response.send("successfully posted data")
//})

//posting json
//app.post("/", (request, response)=>{
//    console.log(request.body)
//    //database work here
//    response.json({ success : true })
//})

//using JOI
//app.post("/", (request, response)=>{
//    console.log(request.body)
//    const schema = JOI.object().keys({
//        email: JOI.string().trim().email().required(),
//        password: JOI.string().min(5).max(10).required()
//    })
//    JOI.validate(request.body, schema, (error, result)=>{
//        if(error){
//            console.log(error)
//            response.send()
//        } else {
//            console.log(result)
//            response.send("successfully posted data")
//        }
//    })
//})



//app.get("/example", (request, response)=> {
//    response.send("Hello World from Example Route")
//})
//
//app.get("/example/:name/:age", (request, response)=> {
//    console.log(request.params)
//    console.log(request.query)
//    response.send("Hello World from Example Route Params \n . My name is " + request.params.name + " and i am " + request.params.age + " years old. ")
//})

app.listen(3000)













































