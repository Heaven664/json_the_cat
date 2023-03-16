const request = require('request');

const breed = process.argv[2];

request(`https://api.thecatapi.com/v1/breeds/search?q=${breed}`, function(error, response, body) {
  // Print the error and terminates the application if one occurred
  if (error) {
    console.log(`error: ${error.code}`);
    process.exit();
  }
  const data = JSON.parse(body);
  // If returned empty array (breed not found)
  if (!data[0]) {
    console.log("Breed not found");
    process.exit();
  }
  console.log(data[0].description);
});