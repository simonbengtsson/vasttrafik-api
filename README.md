# Vasttrafik travel planner API

This is a mirror of Västtrafik's official Travel Planner Javascript API client. See https://developer.vasttrafik.se/portal/#/

### Monkey Patches
Two minor changed were done to the official javascript client:

- JSON instead of XML is returned by default (see `vt-api/src/ApiClient.js#123`)
- Avoids duplicate api calls when using promises (see `vt-api/src/ApiClient.js#120`)

### Questions?
Direct any questions related to the API to Västtrafiks [developer forum](https://developer.vasttrafik.se/portal/#/community/forum/9). If you have any questions regarding this wrapper, feel free posting an issue here.