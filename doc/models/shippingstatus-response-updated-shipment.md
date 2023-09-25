
# Shippingstatus Response Updated Shipment

## Structure

`ShippingstatusResponseUpdatedShipment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `barcode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The barcode belonging to the status update |
| `creationDate` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The date of the update |
| `customerNumber` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The customer number |
| `customerCode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The customer code |
| `status` | [`Status2 \| undefined`](../../doc/models/status-2.md) | Optional | The status update. See [Status codes](#tag/TandT-status-codes/Status-codes) for possible values. |

## Example (as JSON)

```json
{
  "Barcode": "3SDEVC5672025",
  "CreationDate": "11/07/2022 00:00:00",
  "CustomerNumber": "11223344",
  "CustomerCode": "DEVC",
  "Status": {
    "Timestamp": "Timestamp8",
    "StatusCode": "StatusCode8",
    "StatusDescription": "StatusDescription0",
    "PhaseCode": "PhaseCode2",
    "PhaseDescription": "PhaseDescription8"
  }
}
```

