# PlaneraResa.VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionsResultApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**hasError** | **Boolean** | Flag indicating that an error occurred while getting ticket suggestions. | [optional] 
**ticketSuggestions** | [**[VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel]**](VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketSuggestionApiModel.md) | Ticket suggestions for a journey. | [optional] 
**ticketValidities** | [**[VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel]**](VTApiPlaneraResaWebV4ModelsJourneyDetailsTicketValidityApiModel.md) | An array with the tickets from the existingTickets-array in the post-body. Validity for the journey is indicated for each ticket in the array. Included if &#39;ticketsuggestions&#39; is passed in the includes array in the request, otherwise null. | [optional] 


