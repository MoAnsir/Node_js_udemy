const request = require('request');

var geocodeAddress = (key, address, callBack) => {
    let encodedAddress = encodeURIComponent(address);

    request({
        url: `http://www.mapquestapi.com/geocoding/v1/address?key=${key}&location=${encodedAddress}`,
        json: true
    }, (error, reponse, body) => {
        if(error){
            callBack('Unable to connect to Map Quest API servers.');
        }else if(body.info.statuscode === 400 || body.results[0].locations[0] === undefined){
            callBack('Unable to find that address.');
        }else if(body.info.statuscode === 0){
            callBack(undefined, {
                address: body.results[0].providedLocation.location,
                latitude: body.results[0].locations[0].latLng.lat,
                longitude: body.results[0].locations[0].latLng.lng
            });
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;