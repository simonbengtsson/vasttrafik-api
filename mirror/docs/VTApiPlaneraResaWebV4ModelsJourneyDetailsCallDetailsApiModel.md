# PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsCallDetailsApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**stopPoint** | [**VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel**](VTApiPlaneraResaWebV4ModelsJourneyDetailsStopPointApiModel.md) |  | 
**plannedArrivalTime** | **String** | The planned arrival time for the call in RFC 3339 format. | [optional] 
**plannedDepartureTime** | **String** | The planned departure time for the call in RFC 3339 format. | [optional] 
**estimatedArrivalTime** | **String** | The estimated arrival time for the call in RFC 3339 format. | [optional] 
**estimatedDepartureTime** | **String** | The estimated departure time for the call in RFC 3339 format. | [optional] 
**estimatedOtherwisePlannedArrivalTime** | **String** | The best known time of the call in RFC 3339 format. Is EstimatedArrivalTime if exists, otherwise PlannedArrivalTime. | [optional] [readonly] 
**estimatedOtherwisePlannedDepartureTime** | **String** | The best known time of the call in RFC 3339 format. Is EstimatedDepartureTime if exists, otherwise PlannedDepartureTime. | [optional] [readonly] 
**plannedPlatform** | **String** | The planned platform of the call. | [optional] 
**estimatedPlatform** | **String** | The estimated platform of the call. | [optional] 
**latitude** | **Number** | The latitude of the stop point of the call. | [optional] 
**longitude** | **Number** | The longitude of the stop point of the call. | [optional] 
**index** | **String** | The index of the stop point of the call. | [optional] 
**isOnTripLeg** | **Boolean** | The call is on the trip leg. | [optional] 
**isTripLegStart** | **Boolean** | The call is the first on the trip leg. | [optional] 
**isTripLegStop** | **Boolean** | The call is the last on the trip leg. | [optional] 
**tariffZones** | [**[VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel]**](VTApiPlaneraResaWebV4ModelsJourneyDetailsTariffZoneApiModel.md) | The primary tariff zone of the call. A call can be related to a stop area with multiple tariff zones  and this is the zone that for example should be displayed in overviews etc. | [optional] 
**occupancy** | [**VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel**](VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel.md) |  | [optional] 
**isCancelled** | **Boolean** | Flag indicating if the call is cancelled. | [optional] 
**isDepartureCancelled** | **Boolean** | Flag indicating if the departure is cancelled. | [optional] 
**isArrivalCancelled** | **Boolean** | Flag indicating if the arrival is cancelled. | [optional] 


