const request = require('request');

var weathercodeForeCast = (key, lat, lng, callBack) => {
    request({
        url: `https://api.darksky.net/forecast/${key}/${lat},${lng}?units=uk2`,
        //url: 'https://api.darksky.net/forecast/b9fd399736ef981293e65d46412060b1/51.4695,-0.333481?units=uk2',
        json: true
    }, (error, reponse, body) => {
        if(error){
            callBack('Unable to connect to foreCast.io servers.');
        }else if(!error && reponse.statusCode === 400){
            callBack(`Unable to connect to foreCast.io servers. Error code ${reponse.statusCode}`);
        }else if(!error && reponse.statusCode === 403){
            callBack(`Error code ${reponse.statusCode}`);
        }else if(!error && reponse.statusCode === 200){
            callBack(undefined, {
                weather: body.currently,
                temperature: body.currently.temperature,
                apparentTemperature: body.currently.apparentTemperature
            });
        }
    });
};

module.exports.weathercodeForeCast = weathercodeForeCast;