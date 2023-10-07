const port=3000;
const hostname2="127.0.0.1"
const http=require('http');
const { hostname } = require('os');
// console.log(http);
const server=http.createServer((req,res)=>{
    console.log(req.url);
    res.writeHead(200,{"content-type": "text/plain"})
    res.write("This is my dataaaa")
    res.end()
});
server.listen(port,hostname2,()=>{
    console.log(`Check the Server ${hostname2}:${port}`)

})