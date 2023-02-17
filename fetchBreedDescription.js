const request = require('request');

const fetchBreedDescription = function(breedName){
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`), (error, response, body) => {
    const data = JSON.parse(body);
      if (data[0] === undefined){
        return error
      }
    return data[0].description;
  }
}





// request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (error, response, body) => {
//   // console.log('body:', body); // Print the HTML for the Google homepage.
//   const data = JSON.parse(body);
//   if (response.statusCode !== 200) {
//     console.log(`The Website was ${response.statusMessage}`);
//     return;
//   }
//   if (data[0] === undefined) {
//     console.log('breed not found');
//     return;
//   }
//   console.log(data[0].description);
// });


module.exports = {fetchBreedDescription};