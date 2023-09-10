# Västtrafik API (reseplaneraren) for JavaScript

This is a mirror of the official Västtrafik Travel Planner API Client for Javascript. For more information, see [the official api website](https://developer.vasttrafik.se/apis/13/v4).

### Usage

Below is an example of how to use the LocationsApi endpoint. See all endpoints
in ./mirror/README.md or https://developer.vasttrafik.se/apis/13/v4

NodeJS (see ./example.js)

```js
const vasttrafik = require("vasttrafik-api");

// Sample credentials. Be sure to get your own before going into production.
(async () => {
  const key = "8aOzt2RmMIG0OXSyIgjM2IkHvAoa";
  const secret = "OMxjxjaXblXdpn8E1gYFehHyx3Ea";
  await vasttrafik.authorize(key, secret);

  const api = new vasttrafik.LocationsApi();
  const res = await api.locationsByTextGet({ input: "Lindholmen" });
  console.log(res.text);
})();
```

Browsers (see ./example.html)

```html
<script src="./dist/vasttrafik.js"></script>
<script>
  (function () {
    // Sample token. Generate access token on server (see example.js)
    var token = "eyJ4NXQiOiJaV05sTURNNE56SmpZ...";
    vasttrafik.setAccessToken(token);

    var api = new vasttrafik.LocationsApi();
    api
      .locationsByTextGet({ input: "Lindholmen" })
      .then(function (error, data, res) {
        console.log(res.text);
      });
  })();
</script>
```

### Authentication

If you just want to test things out you can use these sample credentials:

`key` '8aOzt2RmMIG0OXSyIgjM2IkHvAoa'
`secret` 'OMxjxjaXblXdpn8E1gYFehHyx3Ea'

Don't forget to create your own credentials in the [developer portal](https://developer.vasttrafik.se/portal/#/) before going into production however since the sample ones might become invalid at any time.

### Changes

This repository is mostly a simple mirror of the official api client, but a few changes were made to make it easier to work with.

Helper methods added:

- `vasttrafik.authorize(key, secret, deviceId)` Fetches an access token with the specified key and secret (cannot be used in the browser)
- `vasttrafik.setAccessToken(token)` Authorizes upcoming api calls with the specified access token (obtained with authorize)

Three patches applied to APIClient.js (commented with @monkeyPatch)

- JSON instead of XML is returned by default (see `mirror/src/ApiClient.js#448`)
- Fix promise usage (see `mirror/src/ApiClient.js#453`)

### Version

- npm version patch|minor|major
- npm run deploy

### Questions?

You can post questions about Västtrafik's API in the [developer forum](https://developer.vasttrafik.se/portal/#/community/forum/9). Also feel free posting issues or questions regarding this mirror here on github.
