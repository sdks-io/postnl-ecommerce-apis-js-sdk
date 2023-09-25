
# Customer

## Structure

`Customer`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`Address3 \| undefined`](../../doc/models/address-3.md) | Optional | - |
| `collectionLocation` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Code of delivery location at PostNL Pakketten<br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `6` |
| `contactPerson` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Name of customer contact person |
| `customerCode` | [`string`](../../doc/models/string-enum.md) | Required | Customer code as known at PostNL Pakketten<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `6` |
| `customerNumber` | [`string`](../../doc/models/string-enum.md) | Required | Name of customer contact person<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `8` |
| `email` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | E-mail address of the customer. Mandatory for Non EU destinations.<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `50` |
| `name` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Customer name<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `35` |

## Example (as JSON)

```json
{
  "CollectionLocation": "123456",
  "ContactPerson": "Janssen",
  "CustomerCode": "DEVC",
  "CustomerNumber": "11223344",
  "Email": "email@company.com",
  "Name": "Janssen",
  "Address": {
    "AddressType": "AddressType6",
    "Area": "Area2",
    "Buildingname": "Buildingname6",
    "City": "City6",
    "CompanyName": "CompanyName8",
    "Countrycode": "Countrycode2",
    "Department": "Department2",
    "Doorcode": "Doorcode8"
  }
}
```

