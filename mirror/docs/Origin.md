# Reseplaneraren.Origin

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**routeIdx** | **String** | Route index of a stop/station. Can be used as a reference of the stop/station in a journeyDetail response | [optional] 
**value** | **String** |  | 
**cancelled** | **Boolean** | Will be set to true if departure/arrival at this stop is cancelled | [optional] 
**track** | **String** | Track information, if available | [optional] 
**rtTrack** | **String** | Realtime track information, if available | [optional] 
**type** | **String** | The attribute type specifies the type of location. Valid values are ST (stop/station), ADR (address) or POI (point of interest) | 
**_date** | **Date** | Date in format YYYY-MM-DD | 
**notes** | [**Notes**](Notes.md) |  | [optional] 
**id** | **String** | ID of this stop | [optional] 
**rtDate** | **Date** | Realtime date in format YYYY-MM-DD, if available | [optional] 
**time** | **String** | Time in format HH:MM | 
**directdate** | **Date** | Date in format YYYY-MM-DD.  Based on the direct travel time | [optional] 
**name** | **String** | Contains the name of the location | 
**rtTime** | **String** | Realtime time in format HH:MM if available | [optional] 
**directtime** | **String** | Direct Time format HH:MM. Based on the direct travel time | [optional] 


