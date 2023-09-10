var vasttrafik = require('./mirror/dist/index.js');
var superagent = require('superagent');

/**
 * Authorize all upcoming api calls with the specified access token
 * @param token {string}
 */
vasttrafik.setAccessToken = function(token, client) {
    var client = vasttrafik.ApiClient.instance;
    client.defaultHeaders['Authorization'] = 'Bearer ' + token;
};

/**
 * Fetches an access token with the specified key and secret. The key and secret 
 * should be obtained through the Västtrafik developer portal https://developer.vasttrafik.se/portal. 
 * This method does not work in browser (vasttrafik security policy).
 *
 * @param key {string} The oauth 2 key
 * @param secret {string} The oauth 2 secret
 * @param deviceId {string?} If not set, the current time is used resulting in a new access token each call
 * @param callback
 * @returns Promise
 */
vasttrafik.authorize = function(key, secret, deviceId) {
    deviceId = deviceId || new Date().getTime();

    var credentials = Buffer.from(key + ':' + secret).toString('base64')

    var request = superagent('POST', 'https://ext-api.vasttrafik.se/token');
    request.set({Authorization: 'Basic ' + credentials});
    request.send('grant_type=client_credentials&scope=device_' + deviceId);

    return request.then(function (res) {
        if (!res.ok || res.error) {
            return Promise.reject(res.error || new Error('Http error ' + res.statusCode));
        } else {
            var token = res.body.access_token;
            return token;
        }
    });
};

module.exports = vasttrafik;