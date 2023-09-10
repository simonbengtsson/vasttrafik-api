# PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**origin** | [**VTApiPlaneraResaWebV4ModelsJourneysCallApiModel**](VTApiPlaneraResaWebV4ModelsJourneysCallApiModel.md) |  | 
**destination** | [**VTApiPlaneraResaWebV4ModelsJourneysCallApiModel**](VTApiPlaneraResaWebV4ModelsJourneysCallApiModel.md) |  | 
**isCancelled** | **Boolean** | Flag indicating if the trip leg is cancelled. | 
**isPartCancelled** | **Boolean** | Flag indicating if the trip leg is partially cancelled. | [optional] 
**serviceJourney** | [**VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel**](VTApiPlaneraResaWebV4ModelsJourneysServiceJourneyApiModel.md) |  | [optional] 
**notes** | [**[VTApiPlaneraResaCoreModelsNote]**](VTApiPlaneraResaCoreModelsNote.md) | An ordered list (most important first) of notes related to the trip leg. | [optional] 
**estimatedDistanceInMeters** | **Number** | Estimated distance in meters. Only for transport mode Walk. | [optional] 
**plannedConnectingTimeInMinutes** | **Number** | The planned (according to timetable) connecting time in minutes relative to  the previous public transport trip leg (if any). | [optional] 
**estimatedConnectingTimeInMinutes** | **Number** | The estimated (according to real-time data) connecting time in minutes relative to  the previous public transport trip leg (if any). | [optional] 
**isRiskOfMissingConnection** | **Boolean** | Flag indicating that there is less than 5 minutes margin between arriving at the  origin stop point and the departure from that stop point. | [optional] 
**plannedDepartureTime** | **String** | The planned departure time in RFC 3339 format. | [optional] 
**plannedArrivalTime** | **String** | The planned arrival time in RFC 3339 format. | [optional] 
**plannedDurationInMinutes** | **Number** | The planned duration in minutes. | [optional] 
**estimatedDepartureTime** | **String** | The estimated departure time in RFC 3339 format, if available. | [optional] 
**estimatedArrivalTime** | **String** | The estimated arrival time in RFC 3339 format, if available. | [optional] 
**estimatedDurationInMinutes** | **Number** | The estimated duration in minutes, if available. | [optional] 
**estimatedOtherwisePlannedArrivalTime** | **String** | The best known time of the arrival in RFC 3339 format. Is EstimatedArrivalTime if exists, otherwise PlannedArrivalTime. | [optional] [readonly] 
**estimatedOtherwisePlannedDepartureTime** | **String** | The best known time of the departure in RFC 3339 format. Is EstimatedDepartureTime if exists, otherwise PlannedDepartureTime. | [optional] [readonly] 
**occupancy** | [**VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel**](VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel.md) |  | [optional] 
**journeyLegIndex** | **Number** | Index of Leg in Journey | [optional] 


