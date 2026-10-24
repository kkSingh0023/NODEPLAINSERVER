const http=require('http');

const port=3000;

const server=http.createServer((req,res)=>{
    console.log('request was made: '+req.url);
    console.log(req);
    console.log(res);
    res.writeHead(200,{'Content-Type':'text/plain'});
    if(req.url==='/'){
        res.write('Hello from the home page');
    }else if(req.url==='/about'){
        res.write('Hello from the about page');
    }else{
        res.write('Hello from the other page');
    }
    res.end();

  
   
 
});

server.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
});