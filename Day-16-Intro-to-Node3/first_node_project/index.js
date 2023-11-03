const axios = require('axios');

// console.log(axios);

async function fetch(){
    const response =await axios.get('http://www.omdbapi.com/?t=harry&apikey=7a5b1548');
  console.log(response.data)
}

fetch()

