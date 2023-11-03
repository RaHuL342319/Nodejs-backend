//how can we write a function to download some data from a  url, and not using callbacks
// Instead use Promise?
function fetchData(url){
    return new Promise(function(resolve,reject){
        console.log("going to start download from ", url);
        setTimeout(function process(){
            let data = "Dummy Downloaded data";
            console.log("download completed");
            // somehow we need to return the data 
            resolve(data); // return some data on success
        }, 10000);
        console.log("timer to mimic download started")
    })                      
}

console.log("Starting the program");
console.log("We are expecting to mimic a downloader");
x = fetchData("www.google.com");
console.log("New Promise object created successfully, but downloading still going on..")
// console.log(x);