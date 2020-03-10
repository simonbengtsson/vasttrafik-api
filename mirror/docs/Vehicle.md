# Reseplaneraren.Vehicle

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**lcolor** | **String** | Line color of the journey | 
**prodClass** | **String** | Product class | 
**bcolor** | **String** | Background color of the journey | 
**direction** | **Number** | Direction of the vehicle. This is a value between 0 and 31 which is describing a direction vector | 
**name** | **String** | Journey name | 
**gid** | **String** | Service GID | 
**delay** | **Number** | Current delay of the vehicle in minutes, can be negative, zero or positive | 
**y** | **Number** | Y coordinate (latitude) of the position in WGS84 * 1000000 | 
**x** | **Number** | X coordinate (longitude) of the position in WGS84 * 1000000 | 


<a name="ProdClassEnum"></a>
## Enum: ProdClassEnum


* `VAS` (value: `"VAS"`)

* `LDT` (value: `"LDT"`)

* `REG` (value: `"REG"`)

* `BUS` (value: `"BUS"`)

* `BOAT` (value: `"BOAT"`)

* `TRAM` (value: `"TRAM"`)

* `TAXI` (value: `"TAXI"`)




