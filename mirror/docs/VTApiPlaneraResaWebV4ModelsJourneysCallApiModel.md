# PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysCallApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stopPoint** | [**VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel**](VTApiPlaneraResaWebV4ModelsJourneysStopPointApiModel.md) |  | 
**plannedTime** | **String** | The planned time of the call in RFC 3339 format. | 
**estimatedTime** | **String** | The estimated time of the call in RFC 3339 format. | [optional] 
**estimatedOtherwisePlannedTime** | **String** | The best known time of the call in RFC 3339 format. Is EstimatedTime if exists, otherwise PlannedTime. | [optional] [readonly] 
**notes** | [**[VTApiPlaneraResaCoreModelsNote]**](VTApiPlaneraResaCoreModelsNote.md) | An ordered list (most important first) of notes related to the call. | [optional] 


