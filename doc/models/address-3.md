
# Address 3

## Structure

`Address3`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `addressType` | [`string`](../../doc/models/string-enum.md) | Required | Address 02 is mandatory. It can either be placed in the Customer segment or in the Shipment segment. Note that if you put it in the Shipment segment, it should go into all Shipment segments.<br>**Constraints**: *Pattern*: `^02$` |
| `area` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Area of the address<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `35` |
| `buildingname` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Building name of the address<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `35` |
| `city` | [`string`](../../doc/models/string-enum.md) | Required | City of the address<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `35` |
| `companyName` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | This field has a dependency with the field Name. One of both fields must be filled mandatory; using both fields is also allowed. Mandatory when AddressType is 09.<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `35` |
| `countrycode` | [`string`](../../doc/models/string-enum.md) | Required | The ISO2 country codes<br>**Constraints**: *Pattern*: `^[A-Z]{2}$` |
| `department` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Send to specific department of a company<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `35` |
| `doorcode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Door code of address. Mandatory for some international shipments.<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `35` |
| `firstName` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Remark: please add FirstName and Name (lastname) of the receiver to improve the parcel tracking experience of your customer.<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `35` |
| `floor` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Send to specific floor of a company<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `35` |
| `houseNr` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Mandatory for shipments to Benelux. Max. length is 5 characters (only for Benelux addresses). For Benelux addresses,this field should always be numeric.<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `35` |
| `houseNrExt` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | House number extension<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `35` |
| `name` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Last name of person. This field has a dependency with the field CompanyName. One of both fields must be filled mandatory; using both fields is also allowed. Remark: please add FirstName and Name (lastname) of the receiver to improve the parcel tracking experience of your customer.<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `35` |
| `region` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Region of the address<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `35` |
| `street` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | This field has a dependency with the field StreetHouseNrExt. One of both fields must be filled mandatory; using both fields simultaneously is discouraged.<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `95` |
| `streetHouseNrExt` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Combination of Street, HouseNr and HouseNrExt. Please see [Guidelines](https://developer.postnl.nl/browse-apis/send-and-track/labelling-webservice/) for the explanation. |
| `zipcode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Zipcode of the address. Mandatory for shipments to Benelux. Max length (NL) 6 characters,(BE;LU) 4 numeric characters<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `17` |

## Example (as JSON)

```json
{
  "AddressType": "02",
  "Area": "Beukenhorst",
  "Buildingname": "AA",
  "City": "Hoofddorp",
  "CompanyName": "PostNL",
  "Countrycode": "NL",
  "Department": "IT",
  "Doorcode": "123",
  "FirstName": "Peter",
  "Floor": "4th floor",
  "HouseNr": "42",
  "HouseNrExt": "bis",
  "Name": "de Ruiter",
  "Region": "Noord-Holland",
  "Street": "Siriusdreef",
  "Zipcode": "2132WT"
}
```

