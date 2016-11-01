var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?units=imperial&appid=7da0c80b47bb1757e18f1528cf4001c2'

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if (res.data.cod && res.data.message) {
        throw Error(error.data.message);
      } else {
        return res.data.main.temp;
      }
    }, function (error) {
      throw new Error(error.data.message);
    });
  }
}
