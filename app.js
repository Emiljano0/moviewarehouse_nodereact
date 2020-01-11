//console.log("Hello World")
//const tutorial = require("./tutorial.js")
//console.log(tutorial)
//console.log(tutorial.sumO(13, 222))
//console.log(tutorial.PIO)
//console.log(new tutorial.MathObjectO)

//const EventEmitter = require("events")
//const FirstEventEmitter = new EventEmitter()
//FirstEventEmitter.on("FirstListener", (n1, n2)=>{
//    console.log(n1+n2)
//})
//FirstEventEmitter.emit("FirstListener", 1, 17)
//
//class Person extends EventEmitter {
//    constructor(name) {
//        super()
//        this._name = name
//    }
//
//    get name() {
//        return this._name
//    }
//}
//
//let pedro = new Person("Pedro")
//pedro.on("NameListener", ()=> {
//    console.log("my name is " + pedro.name)
//})
//pedro.emit("NameListener")
//
//let ukulele = new Person("Ukulele")
//ukulele.on("FLSPerson", ()=>{
//    console.log("2nd Person's name is "+ ukulele.name)
//})
//ukulele.emit("FLSPerson")


//const readLine = require("readline")
//const RL = readLine.createInterface({input : process.stdin,
//                                     output : process.stdout })
//let n1 = Math.floor((Math.random()*10) + 1)
//let n2 = Math.floor((Math.random()*10) + 1)
//let answer = n1 + n2
//
//RL.question(`What is ${n1} + ${n2} ? \n`,
//    (userInput)=> {
//        if (userInput.trim() == answer){
//            RL.close()
//        } else {
//            RL.setPrompt("Incorrect Response. Plese try again \n ")
//            RL.prompt()
//            RL.on("line", (userInput)=>{
//                if (userInput.trim() == answer){
//                    RL.close()
//                } else {
//                    RL.setPrompt(`${userInput} is incorrect. Plese try again \n `)
//                    RL.prompt()
//                }
//            })
//        }
//    }
//)
//
//RL.on("close", ()=>{
//    console.log("Correct")
//})


//const FileSystemModule = require("fs")

//create a file
//FileSystemModule.writeFile("example.txt", "This is an example.", (error)=>{
//    if(error){
//        console.log(error)
//    } else {
//        console.log("File succesfully created")
//        FileSystemModule.readFile("example.txt","utf8",(error,file)=>{
//        if(error){
//            console.log(error)
//        } else {
//            console.log(file)
//        }
//        })
//    }
//})

//rename a file
//FileSystemModule.rename("example4343.txt", "example2222.txt",(error)=>{
//    if(error){
//        console.log(error)
//    } else {
//        console.log("succesfully renamed")
//    }
//})

//append data to a file
//FileSystemModule.appendFile("example2222.txt", "\n This data is appended to the file .", (error)=>{
//    if(error){
//        console.log(error)
//    } else {
//        console.log("Data succesfully appended to the file.")
//        FileSystemModule.readFile("example2222.txt","utf8",(error,file)=>{
//        if(error){
//            console.log(error)
//        } else {
//            console.log(file)
//        }
//        })
//    }
//})

//delete a file
//FileSystemModule.unlink("example2222.txt", (error)=>{
//    if(error){
//        console.log(error)
//    } else {
//        console.log("succesfully deleted the file")
//    }
//})


//const FSM = require("fs")
//FSM.mkdir("FirstDirectory", (error)=>{
//    if(error){
//        FSM.readdir("FirstDirectory", (error, files)=>{
//            if(error){
//                console.log(error)
//            } else {
//                for(let fileVar of files){
//                    FSM.unlink("./FirstDirectory/" + fileVar, (error)=>{
//                        if(error){
//                            console.log(error)
//                        } else {
//                            console.log("succesfully deleted the file")
//                        }
//                    })
//                }
//            }
//            FSM.rmdir("FirstDirectory", (error)=>{
//                if(error){
//                    console.log(error)
//                } else {
//                    console.log("Succesfully removed the Directory")
//                }
//            })
//        })
//    } else {
//        FSM.writeFile("./FirstDirectory/FirstFile.txt", "This is the text inside the first file.", (error)=>{
//            if(error){
//                console.log(error)
//            } else {
//                console.log("File succesfully created")
//                FSM.readFile("./FirstDirectory/FirstFile.txt","utf8",(error,file)=>{
//                if(error){
//                    console.log(error)
//                } else {
//                    console.log(file)
//                }
//                })
//            }
//        })
//        FSM.writeFile("./FirstDirectory/SecondFile.txt", "This is the text inside the second file.", (error)=>{
//            if(error){
//                console.log(error)
//            } else {
//                console.log("2nd File succesfully created")
//                FSM.readFile("./FirstDirectory/SecondFile.txt","utf8",(error,file)=>{
//                if(error){
//                    console.log(error)
//                } else {
//                    console.log(file)
//                }
//                })
//            }
//        })
//    }
//})
//
//
//


//const FSM = require("fs")
//const ZLIB = require("zlib")
//const GZIP = ZLIB.createGzip()
//const UNZIP = ZLIB.createGunzip()
////const readStream = FSM.createReadStream("./example.txt","utf8")
////const writeStream = FSM.createWriteStream("example2.txt.gz")
//const readStream2 = FSM.createReadStream("./example2.txt.gz")
//const writeStream2 = FSM.createWriteStream("example3.txt")
////readStream.on("data",(chunk)=>{
////    console.log(chunk)
////    writeStream.write(chunk)
////})
////readStream.pipe(GZIP).pipe(writeStream)
//readStream2.pipe(UNZIP).pipe(writeStream2)


//const httpModule = require("http")
//const server = httpModule.createServer((request, response)=>{
//    if(request.url === "/"){
//        response.write("Hello World")
//        response.end()
//    } else {
//        response.write("Hello World not from the main domain")
//        response.end()
//    }
//})
//server.listen("3000")


//const httpModule = require("http")
//const FSM = require("fs")
//httpModule.createServer((request, response)=>{
//    const RS = FSM.createReadStream("./static/Cosmos Poster.jpg")
//    response.writeHead(200, {"Content-type": "image/png"})
//    RS.pipe(response)
//}).listen(3000)


//const LODASH = require("lodash")
//let example = LODASH.fill([1,2,3,4,5], "pineapple", 2, 4)
//console.log(example)







































