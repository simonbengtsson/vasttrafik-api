# PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**transportMode** | [**VTApiPlaneraResaCoreModelsTransportMode**](VTApiPlaneraResaCoreModelsTransportMode.md) |  | [optional] 
**transportSubMode** | [**VTApiPlaneraResaCoreModelsTransportSubMode**](VTApiPlaneraResaCoreModelsTransportSubMode.md) |  | [optional] 
**origin** | [**VTApiPlaneraResaWebV4ModelsJourneysCallApiModel**](VTApiPlaneraResaWebV4ModelsJourneysCallApiModel.md) |  | [optional] 
**destination** | [**VTApiPlaneraResaWebV4ModelsJourneysCallApiModel**](VTApiPlaneraResaWebV4ModelsJourneysCallApiModel.md) |  | [optional] 
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
**segments** | [**[VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel]**](VTApiPlaneraResaWebV4ModelsJourneysLinkSegmentApiModel.md) | The segments that make up this link. | [optional] 
**journeyLegIndex** | **Number** | Index of Leg in Journey | [optional] 


