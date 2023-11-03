// Tasks:
// 1. Write a function to download data from url
// 2. write a function to save that downloaded data in a file and return the filename
// 3. write a function to upload the file written in previous step to a newurl

function fetchData(url){
    return new Promise(function(resolve,reject){
        console.log("going to start download from ", url);
        setTimeout(function processDownload(){
            let data = "Dummy Downloaded data";
            console.log("download completed");
            // somehow we need to return the data 
            resolve(data); // return some data on success
        }, 7000);
    })                      
}

function writeData(data){
    return new Promise(function(resolve,reject){
        console.log("Started writing ", data, " in a file");
        setTimeout(function processWrite(){
            let filename = "output.txt";
            console.log("file written successfully");
            resolve(filename)
        })
    })
}

function uploadData(file, url){
    return new Promise(function(resolve,reject){
        console.log("Upload started on url", url,"filename is", file);
        setTimeout(function processUpload(){
            let result = "SUCCESS";
            console.log("Uploading done");
            resolve(result);
        },5000)
});
}

// chaining of promises
let downloadPromise = fetchData("Www.google.com");
downloadPromise.then(function processDownload(value){
    console.log("Download promise fulfilled");
    return(value);
}).then(
    function processWrite(value){
        return writeData(value);
    }
).then(
    function processUpload(filename){
        return uploadData(filename,"www.drive.google.com")
    }
)