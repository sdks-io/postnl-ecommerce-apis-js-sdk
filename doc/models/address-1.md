
# Address 1

The pickup location address

## Structure

`Address1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `street` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The pickup location street |
| `zipcode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The pickup location zipcode |
| `houseNr` | `number \| undefined` | Optional | The pickup location housenumber |
| `houseNrExt` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The pickup location housenumber extension |
| `countrycode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The pickup location country |
| `companyName` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The pickup location company name |

## Example (as JSON)

```json
{
  "Street": "Siriusdreef",
  "Zipcode": "2132WT",
  "HouseNr": 42,
  "HouseNrExt": "-60",
  "Countrycode": "NL",
  "CompanyName": "Pickup company BV"
}
```

