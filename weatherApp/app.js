const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weathercode = require('./weathercode/weathercode');

const geocodeKey = '3eABereTvwmP7XPdpn9GCKLhAFNeG80z';
const weathercodeKey = 'b9fd399736ef981293e65d46412060b1';

const argv = yargs
    .options({
        a: {
            demand: true,
            alias: 'address',
            describe: 'Address to fetch weather for',
            string: true
        }
    })
    .help()
    .alias('help', 'h')
    .argv;

geocode.geocodeAddress(geocodeKey, argv.address, (errorMessage, result) => {
    if(errorMessage){
        console.log(errorMessage);
    }else{
        weathercode.weathercodeForeCast(weathercodeKey, result.latitude, result.longitude, (errorMessage, weatherResult) => {
            if(errorMessage){
                console.log(errorMessage);
            }else{
                //console.log(JSON.stringify(weatherResult.weather, undefined, 2));
                console.log(`it's currently ${weatherResult.temperature}.\nIt will feel like ${weatherResult.apparentTemperature}.\nAt your current location ${result.address}`);
            }
        });
    }
});