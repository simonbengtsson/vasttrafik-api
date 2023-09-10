const vasttrafik = require('./index.js');

async function example() {
    // Sample credentials. Be sure to get your own before going into production.
    const key = 'Pp3Uv3BWIPsCPy6DRPtBvidPRCga';
    const secret = 'oiXlmiC0Tr6kMkjyY94_qGaw8a8a';
    const token = await vasttrafik.authorize(key, secret);

    vasttrafik.setAccessToken(token); // Token can be passed to and used with browser

    // Find other api features in `./mirror/docs` or in the developer portal
    const api = new vasttrafik.LocationsApi();
    const res = await api.locationsByTextGet({input: 'Lindholmen'});
    const parsed =  JSON.parse(res.text)
    const lindholmen = parsed.results[0]
    console.log(lindholmen)
}

example();
