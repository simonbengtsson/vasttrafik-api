# PlaneraResa.VTApiPlaneraResaWebV4ModelsLocationsLocationApiModel

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**gid** | **String** | The 16-digit Västtrafik gid. | [optional] 
**name** | **String** | The location name. | 
**locationType** | [**VTApiPlaneraResaCoreModelsLocationType**](VTApiPlaneraResaCoreModelsLocationType.md) |  | 
**latitude** | **Number** | The WGS84 latitude of the location. | [optional] 
**longitude** | **Number** | The WGS84 longitude of the location. | [optional] 
**platform** | **String** | The location platform, only available for stop points. | [optional] 
**straightLineDistanceInMeters** | **Number** | The location straight line distance in meters. | [optional] 
**hasLocalService** | **Boolean** | Is \&quot;Närtrafik\&quot; (Local Service) available for the location?  Values are only available for LocationType: StopArea, PointOfInterest and Address.  Values are only available for endpoint: locations/by-text. | [optional] 


