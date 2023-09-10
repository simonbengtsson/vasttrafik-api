# PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneysJourneyApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**reconstructionReference** | **String** | A reference that can be used to reconstruct this journey at a later time. | [optional] 
**detailsReference** | **String** | A reference that should be used when getting detailed information about the journey. | [optional] 
**departureAccessLink** | [**VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel**](VTApiPlaneraResaWebV4ModelsJourneysDepartureAccessLinkApiModel.md) |  | [optional] 
**tripLegs** | [**[VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel]**](VTApiPlaneraResaWebV4ModelsJourneysTripLegApiModel.md) | A list of trip legs on a journey, when applicable. A journey has either one or more trip legs or one  destination link. | [optional] 
**connectionLinks** | [**[VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel]**](VTApiPlaneraResaWebV4ModelsJourneysConnectionLinkApiModel.md) | A list of ConnectionLinks between TripLegs, when applicable. The internal order of TripLegs and ConnectionLinks is defined by Index-property on the objects. | [optional] 
**arrivalAccessLink** | [**VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel**](VTApiPlaneraResaWebV4ModelsJourneysArrivalAccessLinkApiModel.md) |  | [optional] 
**destinationLink** | [**VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel**](VTApiPlaneraResaWebV4ModelsJourneysDestinationLinkApiModel.md) |  | [optional] 
**isDeparted** | **Boolean** | Flag indicating if the first trip leg of the journey is departed. | [optional] 
**occupancy** | [**VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel**](VTApiPlaneraResaWebV4ModelsOccupancyInformationApiModel.md) |  | [optional] 


