const vasttrafik = require('./mirror/src/index.js');
const Base64 = require('Base64');
const superagent = require('superagent');

/**
 * Authorize all upcoming api calls with the specified access token
 * @param token {string}
 */
vasttrafik.setAccessToken = function(token) {
    let client = vasttrafik.ApiClient.instance;
    client.defaultHeaders['Authorization'] = 'Bearer ' + token;
};

/**
 * Fetches an access token with the specified key and secret and authorizes all 
 * all upcoming api calls with it. The key and secret should be obtained through 
 * the Västtrafik developer portal https://developer.vasttrafik.se/portal
 * 
 * @param key {string} The oauth 2 key
 * @param secret {string} The oauth 2 secret
 * @param deviceId {string?} If not set, the current time is used resulting in a new access token each call
 * @param callback
 * @returns Promise
 */
vasttrafik.authorize = function(key, secret, deviceId, callback) {
    deviceId = deviceId || new Date().getTime();
    
    let credentials = Base64.btoa(key + ':' + secret);

    let request = superagent('POST', 'https://api.vasttrafik.se/token');
    request.set({Authorization: 'Basic ' + credentials});
    request.send('grant_type=client_credentials&scope=device_' + deviceId);

    return request.then(res => {
        if (!res.ok) {
            if (callback) {
                callback(res.error, null);
            }
            return Promise.reject(res.error);
        } else {
            let token = res.body.access_token;
            vasttrafik.setAccessToken(token);

            if (callback) {
                callback(null, token);
            }
            
            return token;
        }
    });
};

module.exports = vasttrafik;