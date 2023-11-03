const fs = require('fs');
const transformStream = require('stream');

let fileStream = fs.createReadStream(__dirname+'/input.txt');   // Reading the data from input.txt chunk by chunk as streams using createReadStream
let outputStream = process.stdout;   // outputStream is for accessing the data to console

// If you want see how it is reading the data chunk by chunk then  we need to use Transform() constructor
let middleStream = new transformStream.Transform({
    transform(chunk,enc,nextCB){
        let modifiedChunk = chunk.toString().toUpperCase();
        this.push(modifiedChunk);
        setTimeout(nextCB,1000);
       // nextCB();
    }
})

// Filestream.pipe(outputStream); pipe() : it connects both inputstream to outputStream
let newReadableStream = fileStream.pipe(middleStream);
newReadableStream.pipe(outputStream);

