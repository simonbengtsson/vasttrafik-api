const superagent = require('superagent');
const vasttrafik = require('./index.js');

async function example() {
    // Sample credentials. Be sure to get your own before going into production.
    let key = '8aOzt2RmMIG0OXSyIgjM2IkHvAoa';
    let secret = 'OMxjxjaXblXdpn8E1gYFehHyx3Ea';
    
    await vasttrafik.authorize(key, secret);
    
    // Find other api features in `./mirror/docs` or in the developer portal
    let api = new vasttrafik.LocationApi();
    let res = await api.getLocationByName({input: 'Lindholmen'});
    console.log(res.text);
}

example();

// Improved error messages
process.on('unhandledRejection', r => { console.log(r); process.exit(); });