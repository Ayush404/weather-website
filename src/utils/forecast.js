const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'https://api.darksky.net/forecast/80a2e7f414e3f40c8425f818bb2f94d4/'+ latitude + ',' + longitude

    request({ url:url, json: true }, (error, response) => {
        if (error) {
            callback('Unable to connect weather service (Darksky)', undefined)
        }
        else if (response.body.error) {
            callback('Unable to find location or bad input provided', undefined)
        }
        else {
            callback(undefined, response.body.daily.data[0].summary + ' It is currently '+ response.body.currently.temperature + ' degrees out. There is '+response.body.currently.precipProbability+ '% chance of rain.' )
        }

    })
}

module.exports = forecast