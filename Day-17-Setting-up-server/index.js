// using http module(inbuilt given by node) we can setuyp a basic server.

const http = require("http");
const PORT = 3000;

/**
 * http module contains a function called as createServer
 *
 * createServer(req,res)  => return server object
 *
 * this createServer  function takes a callback as the input.
 * Inside callback, we get two arg  :
 *  - request -> this argument contains all the details about the incoming req.
 *  - response -> this arg contains functions using which can prepare the response.
 *
 * the createServer function returns us the server object.
 */

const server = http.createServer(function exec(req, res) {
  console.log(req.method);

  if (req.url == "/home") {
    res.end("Welcome to Home!");
  } else if (req.url == "/faq") {
    res.end("List of FAQs");
  } else {
    res.end("hello World!");
  }
});

server.listen(PORT, () => {
  // once the server has started then this callback will be executed
  console.log("server statred on port", PORT);
});
