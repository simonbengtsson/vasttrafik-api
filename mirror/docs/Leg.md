# Reseplaneraren.Leg

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**fgColor** | **String** | Foregroundcolor of this line | [optional] 
**booking** | **Boolean** | Will be true if this journey needs to be booked | [optional] 
**direction** | **String** | Direction information | [optional] 
**journeyDetailRef** | [**JourneyDetailRef**](JourneyDetailRef.md) |  | [optional] 
**cancelled** | **Boolean** | Will be true if this journey is cancelled | [optional] 
**kcal** | **Number** | Energy use | [optional] 
**origin** | [**Origin**](Origin.md) |  | [optional] 
**sname** | **String** | Short name of the leg | [optional] 
**type** | **String** | The attribute type specifies the type of the leg. Valid values are VAS, LDT (Long Distance Train), REG (Regional train), BUS , BOAT, TRAM, TAXI (Taxi/Telebus). Furthermore it can be of type WALK, BIKE and CAR if these legs are routes on the street network | 
**geometryRef** | [**GeometryRef**](GeometryRef.md) |  | [optional] 
**bgColor** | **String** | Backgroundcolor of this line | [optional] 
**notes** | [**Notes**](Notes.md) |  | [optional] 
**id** | **String** | ID of the journey | [optional] 
**stroke** | **String** | Stroke style of this line | [optional] 
**reachable** | **Boolean** | Will be true if this journey is not reachable due to delay of the feeder | [optional] 
**name** | **String** | The attribute name specifies the name of the leg | 
**night** | **Boolean** | Will be true if this journey is a night journey | [optional] 
**destination** | [**Destination**](Destination.md) |  | [optional] 
**percentBikeRoad** | **Number** | Percentage of the route that is made up of bike roads | [optional] 
**accessibility** | **String** | will only be set if the vehicle has wheelchair + ramp/lift or lowfloor according to realtime data | [optional] 


