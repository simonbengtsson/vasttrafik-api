const vasttrafik = require('./index.js');

async function example() {
    // Sample credentials. Be sure to get your own before going into production.
    const key = '8aOzt2RmMIG0OXSyIgjM2IkHvAoa';
    const secret = 'OMxjxjaXblXdpn8E1gYFehHyx3Ea';
    const token = await vasttrafik.authorize(key, secret);

    console.log(`Authorized with token: ${token}`);
    
    // Find other api features in `./mirror/docs` or in the developer portal
    const api = new vasttrafik.LocationApi();
    const res = await api.getLocationByName({input: 'Lindholmen'});
    console.log(res.text);
}

example();

// Improved error messages
process.on('unhandledRejection', r => { console.log(r); process.exit(); });