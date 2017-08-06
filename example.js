const superagent = require('superagent');
const Api = require('./mirror/src/index.js');

async function example() {
    let deviceId = new Date().getTime();
    let key = '8aOzt2RmMIG0OXSyIgjM2IkHvAoa';
    let secret = 'OMxjxjaXblXdpn8E1gYFehHyx3Ea';
    
    let token = await authorize(key, secret, deviceId);
    Api.ApiClient.instance.defaultHeaders['Authorization'] = `Bearer ${token}`;
    
    let api = new Api.SysteminfoApi();
    api.getSystemInfo().then((response) => {
        console.log(response.text);
    });
}

example();

/**
 * Generate an access token with 
 */
async function authorize(key, secret, deviceId) {
    let auth = new Buffer(`${key}:${secret}`).toString('base64');

    let request = superagent('POST', 'https://api.vasttrafik.se/token');
    request.set({Authorization: `Basic ${auth}`});
    request.send(`grant_type=client_credentials&scope=device_${deviceId}`);

    return request.then(res => {
        if (!res.ok) {
            return Promise.reject(res.error);
        } else {
            return res.body.access_token;
        }
    });
}