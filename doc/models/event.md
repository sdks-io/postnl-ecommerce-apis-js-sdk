
# Event

## Structure

`Event`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The event code |
| `description` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The event description |
| `destinationLocationCode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Location code of the destination |
| `locationCode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The current location code |
| `routeCode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The route code |
| `routeNumber` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The route number |
| `timeStamp` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Timestamp of the event |

## Example (as JSON)

```json
{
  "Code": "A01",
  "Description": "Pakket is nog niet door PostNL ontvangen of verwerkt",
  "DestinationLocationCode": "888888",
  "LocationCode": "156789",
  "RouteCode": "310",
  "RouteNumber": "310 Sittard Vrangendael",
  "TimeStamp": "07-11-2022 19:10:28"
}
```

