const http=require("http")
const PORT=2001
http.createServer((req,res)=>{
    res.write("THIS IS MERN")
    res.end()
})
.listen((err)=>{
    if(!err) console.log(`this server is running is ${PORT}`)
})