const superagent = require('superagent');
const Api = require('./mirror/src/index.js');

async function example() {
    let deviceId = new Date().getTime();
    let key = '8aOzt2RmMIG0OXSyIgjM2IkHvAoa';
    let secret = 'OMxjxjaXblXdpn8E1gYFehHyx3Ea';
    
    await authorize(key, secret, deviceId);
    
    // Find other api features in `./mirror/docs` or in the developer portal
    let api = new Api.SysteminfoApi();
    let res = await api.getSystemInfo();
    console.log(res.text);
}

example();

/**
 * Helper method which authorizes the Api client with the specified credentials 
 * 
 * @param key {string} Application key (OAuth2)
 * @param secret {string} Application secret (OAuth2)
 * @param deviceId {string|number} Unique device id
 * @returns Promise which resolves when the api client is authorized and ready to be used
 */
function authorize(key, secret, deviceId) {
    let credentials = new Buffer(`${key}:${secret}`).toString('base64');

    let request = superagent('POST', 'https://api.vasttrafik.se/token');
    request.set({Authorization: `Basic ${credentials}`});
    request.send(`grant_type=client_credentials&scope=device_${deviceId}`);

    return request.then(res => {
        if (!res.ok) {
            return Promise.reject(res.error);
        } else {
            let client = Api.ApiClient.instance;
            let token = res.body.access_token;
            client.defaultHeaders['Authorization'] = `Bearer ${token}`;
        }
    });
}