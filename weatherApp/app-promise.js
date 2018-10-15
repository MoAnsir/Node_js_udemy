const yargs = require('yargs');
const axios = require('axios');

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

var encodedAddress = encodeURIComponent(argv.address);
var geocodeUrl = `http://www.mapquestapi.com/geocoding/v1/address?key=${geocodeKey}&location=${encodedAddress}`;

axios.get(geocodeUrl).then((response) => {
    if(response.data.info.statuscode === 400){
        throw new Error('Uanbale to find that address.')
    }

    var lat = response.data.results[0].locations[0].latLng.lat;
    var lng = response.data.results[0].locations[0].latLng.lng;
    var weatherUrl = `https://api.darksky.net/forecast/${weathercodeKey}/${lat},${lng}?units=uk2`;

    // console.log('----------------- Start ----------------');
    // console.log('response status code: ', response.data.info.statuscode);
    // console.log('weatherUrl - ', weatherUrl);
    // //console.log('weatherUrl - ', body.results[0].providedLocation.location);
    // console.log('response.data: ', response.data.results[0].locations[0].latLng);
    // console.log('----------------- End ----------------');

    return axios.get(weatherUrl);
}).then((response) => {
    var temp = response.data.currently.temperature;
    var appTemp = response.data.currently.apparentTemperature;
    console.log('It is currently ', temp, ' But feels like ', appTemp);
}).catch((e) => {
    if(e.code === 'ENOTFOUND'){
        console.log('Unable to connect to API servers');
    }else{
        console.log(e.message);
    }
})