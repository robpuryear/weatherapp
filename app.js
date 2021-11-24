var location = require("./location");
var weather = require("./weather");
// setup yargs where you provide a --location or -l argument
var argv = require("yargs")
  .option("location", {
    alias: "l",
    demand: false,
    describe: "Location to fetch weather for",
    type: "string",
  })
  .help("help").argv;
// if location was provided, call weather() and log the currentWeather
if (typeof argv.l === "string" && argv.l.length > 0) {
  weather(argv.l).then(function (currentWeather) {
      console.log("Location was provided");
      console.log(currentWeather);
    })
    .catch(function (error) {
      console.log(error);
    });
} else {
  // if location was not provided, call location() to get the sender's ip address for location 
  console.log("Location was not provided");
  location().then(function (loc) {
      return weather(loc.city);
    })
    .then(function (currentWeather) {
      console.log(currentWeather);
    })
    .catch(function (error) {
      console.log(error);
    });
}
