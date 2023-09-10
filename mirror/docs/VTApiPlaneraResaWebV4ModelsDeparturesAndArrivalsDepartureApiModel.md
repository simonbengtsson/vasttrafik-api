# PlaneraResa.VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsDepartureApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detailsReference** | **String** | A reference that should be used when getting detailed information about the journey. | [optional] 
**serviceJourney** | [**VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel**](VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsServiceJourneyApiModel.md) |  | [optional] 
**stopPoint** | [**VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel**](VTApiPlaneraResaWebV4ModelsDeparturesAndArrivalsStopPointApiModel.md) |  | 
**plannedTime** | **String** | The planned time of the call in RFC 3339 format. | 
**estimatedTime** | **String** | The estimated time of the call in RFC 3339 format. | [optional] 
**estimatedOtherwisePlannedTime** | **String** | The best known time of the call in RFC 3339 format. Is EstimatedTime if exists, otherwise PlannedTime. | [optional] [readonly] 
**isCancelled** | **Boolean** | Flag indicating if the departure or arrival is cancelled. | [optional] 
**isPartCancelled** | **Boolean** | Flag indicating if the departure or arrival is partially cancelled. | [optional] 
**occupancy** | [**VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel**](VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel.md) |  | [optional] 


