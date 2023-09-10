# PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsArrivalAccessLinkApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transportMode** | [**VTApiPlaneraResaCoreModelsTransportMode**](VTApiPlaneraResaCoreModelsTransportMode.md) |  | [optional] 
**transportSubMode** | [**VTApiPlaneraResaCoreModelsTransportSubMode**](VTApiPlaneraResaCoreModelsTransportSubMode.md) |  | [optional] 
**origin** | [**VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel**](VTApiPlaneraResaWebV4ModelsJourneyDetailsCallApiModel.md) |  | [optional] 
**destination** | [**VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel**](VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkEndpointApiModel.md) |  | [optional] 
**notes** | [**[VTApiPlaneraResaCoreModelsNote]**](VTApiPlaneraResaCoreModelsNote.md) | An ordered list (most important first) of notes related to the access link. | [optional] 
**distanceInMeters** | **Number** | Distance in meters. | [optional] 
**plannedDepartureTime** | **String** | The planned departure time in RFC 3339 format. | [optional] 
**plannedArrivalTime** | **String** | The planned arrival time in RFC 3339 format. | [optional] 
**plannedDurationInMinutes** | **Number** | The planned duration in minutes. | [optional] 
**estimatedDepartureTime** | **String** | The estimated departure time in RFC 3339 format, if available. | [optional] 
**estimatedArrivalTime** | **String** | The estimated arrival time in RFC 3339 format, if available. | [optional] 
**estimatedDurationInMinutes** | **Number** | The estimated duration in minutes, if available. | [optional] 
**estimatedNumberOfSteps** | **Number** | Number of steps based on the distance and an estimated step length of 0.65 meters. | [optional] 
**linkCoordinates** | [**[VTApiPlaneraResaWebV4ModelsCoordinateApiModel]**](VTApiPlaneraResaWebV4ModelsCoordinateApiModel.md) | The coordinates for the link. | [optional] 
**segments** | [**[VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel]**](VTApiPlaneraResaWebV4ModelsJourneyDetailsLinkSegmentApiModel.md) | The segments that make up this link. | [optional] 


