
# Address

## Structure

`Address`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressType` | [`AddressTypeEnum`](../../doc/models/address-type-enum.md) | Required | Address type. 01 is for the receiver address, 02 is for the sender address. |
| `street` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Street name; for Belgian addresses, it is strongly recommended to fill in the  street value<br>**Constraints**: *Maximum Length*: `35` |
| `houseNr` | `number` | Required | The house number of the delivery address |
| `houseNrExt` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | House number extension<br>**Constraints**: *Maximum Length*: `7` |
| `zipcode` | [`string`](../../doc/models/string-enum.md) | Required | Zipcode of the address<br>**Constraints**: *Minimum Length*: `4`, *Maximum Length*: `6` |
| `city` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | City of the address<br>**Constraints**: *Maximum Length*: `35` |
| `countrycode` | [`CountrycodeEnum`](../../doc/models/countrycode-enum.md) | Required | ISO2 country code. Limited to NL and BE. |

## Example (as JSON)

```json
{
  "AddressType": "01",
  "Street": "Molengraaffplantsoen",
  "HouseNr": 74,
  "HouseNrExt": "bis",
  "Zipcode": "3571ZZ",
  "City": "Utrecht",
  "Countrycode": "NL"
}
```

