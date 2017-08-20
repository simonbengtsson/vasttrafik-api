# Västtrafik API client for JavaScript

This is a mirror of the official Västtrafik Travel Planner API Client for Javascript. For more information, see [the official api website](https://developer.vasttrafik.se/portal/#/api/Reseplaneraren/v2/landerss).

### Usage

NodeJS (see ./example.js)
```js
const Api = require('vasttrafik-api');

const key = '<key>';
const secret = '<secret>';

Api.authorize(key, secret).then(function() {
    let api = new Api.LocationApi();
    return api.getLocationByName({input: 'Lindholmen'});
}).then(function(res) {
  console.log(res.text);
});
```

Browsers (see ./example.html)
```html
<script src="./dist/vasttrafik.js"></script>
<script>
    (function() {
        // Fetch access token on server (see example.js)
        // Västtrafik have blocked token generation from browsers
        var token = '<access-token-placeholder>';
        vasttrafik.setAccessToken(token);

        // Find other api features in `./mirror/docs` or in the developer portal
        var api = new vasttrafik.LocationApi();
        api.getLocationByName({input: 'Lindholmen'}, function() {
            console.log(res.text);
        });
    })();
</script>
```

### Docs
Method | Description
------------- | -------------
[**ArrivalBoardApi.getArrivalBoard**](mirror/docs/ArrivalBoardApi.md#getArrivalBoard) | Return the next 20 arrivals (or less if not existing) from a given point in time or the next arrivals in a given timespan.
[**DepartureBoardApi.getDepartureBoard**](mirror/docs/DepartureBoardApi.md#getDepartureBoard) | Return the next 20 departures (or less if not existing) from a given point in time or the next departures in a given timespan.
[**GeometryApi.getGeometry**](mirror/docs/GeometryApi.md#getGeometry) | Returns the polyline for a leg.
[**JourneyDetailApi.getJourneyDetail**](mirror/docs/JourneyDetailApi.md#getJourneyDetail) | Returns information about the complete route of a trip.
[**LivemapApi.livemap**](mirror/docs/LivemapApi.md#livemap) | Returns the positions of all vehicles in a given bounding box
[**LocationApi.getAllStops**](mirror/docs/LocationApi.md#getAllStops) | Returns a list of all stops available in the journey planner.
[**LocationApi.getLocationByName**](mirror/docs/LocationApi.md#getLocationByName) | Returns a list of possible matches in the journey planner database
[**LocationApi.getNearbyAddress**](mirror/docs/LocationApi.md#getNearbyAddress) | Returns the address nearest a given coordinate.
[**LocationApi.getNearbyStops**](mirror/docs/LocationApi.md#getNearbyStops) | Returns a list of stops around a given center coordinate.
[**SysteminfoApi.getSystemInfo**](mirror/docs/SysteminfoApi.md#getSystemInfo) | Provides information about the journey planner and the underlying data
[**TripApi.getTrip**](mirror/docs/TripApi.md#getTrip) | Calculates a trip from a specified origin to a specified destination.

### Authentication
If you just want to test things out you can use these sample credentials:

`key` '8aOzt2RmMIG0OXSyIgjM2IkHvAoa'
`secret` 'OMxjxjaXblXdpn8E1gYFehHyx3Ea'
 
 Don't forget to create your own credentials in the [developer portal](https://developer.vasttrafik.se/portal/#/) before going into production however since the sample ones might become invalid at any time.

### Changes
This repository is mostly a simple mirror of the official api client, but a few changes were made to make it easier to work with.

Helper methods added:
- `client.authorize(key, secret, deviceId)` Fetches an access token with the specified key and secret and then authorizes the client with the it (cannot be used in the browser)
- `client.setAccessToken(token)` Authorizes upcoming api calls with the specified access token

Monkey patches:
- JSON instead of XML is returned by default (see `mirror/src/ApiClient.js#448`)
- Avoids duplicate api calls when using promises (see `mirror/src/ApiClient.js#453`)

### Questions?
You can post questions about Västtrafik's API in the [developer forum](https://developer.vasttrafik.se/portal/#/community/forum/9). Also feel free posting issues or questions regarding this mirror here on github.