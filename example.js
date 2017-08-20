const superagent = require('superagent');
const Api = require('./mirror/src/index.js');

async function example() {
    let key = '8aOzt2RmMIG0OXSyIgjM2IkHvAoa';
    let secret = 'OMxjxjaXblXdpn8E1gYFehHyx3Ea';
    
    await Api.authorize(key, secret);
    
    // Find other api features in `./mirror/docs` or in the developer portal
    let api = new Api.LocationApi();
    let res = await api.getLocationByName({input: 'Lindholmen'});
    console.log(res.text);
}

example();