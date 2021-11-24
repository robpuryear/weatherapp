var request = require("request");

module.exports = function (location) {
  return new Promise(function (resolve, reject) {
    var encodedLocation = encodeURIComponent(location);
    var url =
      "https://api.openweathermap.org/data/2.5/weather?q=" +
      encodedLocation +
      "&appid=21b757d54935a6d57ec032a884783e6f&units=imperial";

    if (!location) {
      return reject("No location provided");
    }
// make the request to get weather
    request(
      {
        url: url,
        json: true,
      },
      function (error, response, body) {
        if (error) {
          reject("Unable to fetch weather");
        } else {
          resolve("It is " + body.main.temp + " degress in " + body.name + " right now");
        }
      }
    );
  });
};
