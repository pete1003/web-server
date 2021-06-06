const request = require('request')

const forecast = (latitude, longitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=2261a32516b744e88bd0ce509f109a57&query=' + latitude + ',' + longitude 

    request({url, json: true}, (error, response) => {
        if (error){
            callback('Unable to commect to weather service.', undefined)
        }else if (response.body.error){
            callback('Unable of find location.', undefined)
        }else {
            callback(undefined, response.body.current.weather_descriptions[0] + '. It is currently '+ response.body.current.temperature + 
            ' degress. There is ' + response.body.current.precip + '% chance of rain.')
        }
    })
}

module.exports = forecast