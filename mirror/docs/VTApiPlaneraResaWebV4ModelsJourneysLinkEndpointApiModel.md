# PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysLinkEndpointApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | The 16-digit Västtrafik gid. | [optional] 
**name** | **String** | The location name. | 
**locationType** | [**VTApiPlaneraResaCoreModelsLocationType**](VTApiPlaneraResaCoreModelsLocationType.md) |  | 
**latitude** | **Number** | The WGS84 latitude of the location. | [optional] 
**longitude** | **Number** | The WGS84 longitude of the location. | [optional] 
**plannedTime** | **String** | The planned time in RFC 3339 format. | 
**estimatedTime** | **String** | The estimated time in RFC 3339 format. | [optional] 
**estimatedOtherwisePlannedTime** | **String** | The best known time of the link in RFC 3339 format. Is EstimatedTime if exists, otherwise PlannedTime. | [optional] [readonly] 
**notes** | [**[VTApiPlaneraResaCoreModelsNote]**](VTApiPlaneraResaCoreModelsNote.md) | An ordered list (most important first) of notes related to the end point. | [optional] 


