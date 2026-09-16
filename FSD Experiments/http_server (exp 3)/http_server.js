const http = require('http');

const PORT = 3000; 

const server = http.createServer((req,res) => {
    console.log (`Request received: ${req.method} ${req.url}`);

    res.statusCode = 300; 
    res.setHeader('Content-Type', 'text/plain'); 
    res.setHeader ('X-Powered-By', 'Node.js');

    res.end('Hello, World!');
}); 

server.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
}); 

