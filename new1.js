const http=require('http')
http.createServer((req,res)=>{
    res.statusCode=200
    res.setHeader('Content-Type',"text/html")
    res.write("<h1>GOOD AFTERNOON STUDENT</h1>")
    res.write("<br>")
    res.write("<h3>GIM</h3>")
    res.write(`
        <form>
        <label for="username">Username:</label>
        <input type="text" id="username" name="username" required>
        <br><br>
        <label for="password">Password:</label>
        <input type="password" id="password" name="password" required>
        <br><br>
        <input type="submit" value="Submit">
    </form>
        
        `)
   
    res.end()
}).listen(2000)