
# Cpc Response

## Structure

`CpcResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `city` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | City of requested address |
| `postalCode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Postalcode of requested address |
| `streetName` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Street of requested address |
| `houseNumber` | `number \| undefined` | Optional | Housenumber of requested address |
| `houseNumberAddition` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Housenumber addition of requested address if applicable |
| `formattedAddress` | [`string[] \| undefined`](../../doc/models/string-enum.md) | Optional | Full formatted address according to PostNL standard (returns each line as a separate string) |

## Example (as JSON)

```json
{
  "city": "UTRECHT",
  "postalCode": "3571ZZ",
  "streetName": "Molengraaffplantsoen",
  "houseNumber": 74,
  "houseNumberAddition": "bis",
  "formattedAddress": [
    "Molengraaffplantsoen 74",
    "3571ZZ UTRECHT"
  ]
}
```

