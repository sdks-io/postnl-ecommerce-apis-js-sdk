
# Shippingstatus Response

## Structure

`ShippingstatusResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `completeStatus` | [`CompleteStatus \| undefined`](../../doc/models/complete-status.md) | Optional | The current status and old statuses of the shipment |
| `currentStatus` | [`CurrentStatus \| undefined`](../../doc/models/current-status.md) | Optional | The current status and old statuses of the shipment |
| `warnings` | [`Warning2[] \| undefined`](../../doc/models/warning-2.md) | Optional | Possible warnings (see [Error Codes](#tag/Error-codes) for possible values) |

## Example (as JSON)

```json
{
  "CompleteStatus": {
    "Shipment": [
      {
        "MainBarcode": "MainBarcode4",
        "Barcode": "Barcode4",
        "ShipmentAmount": "ShipmentAmount0",
        "ShipmentCounter": "ShipmentCounter6",
        "Customer": {
          "CustomerCode": "CustomerCode8",
          "CustomerNumber": "CustomerNumber0",
          "Name": "Name8"
        }
      }
    ]
  },
  "CurrentStatus": {
    "Shipment": [
      {
        "MainBarcode": "MainBarcode4",
        "Barcode": "Barcode4",
        "ShipmentAmount": "ShipmentAmount0",
        "ShipmentCounter": "ShipmentCounter6",
        "Customer": {
          "CustomerCode": "CustomerCode8",
          "CustomerNumber": "CustomerNumber0",
          "Name": "Name8"
        }
      },
      {
        "MainBarcode": "MainBarcode4",
        "Barcode": "Barcode4",
        "ShipmentAmount": "ShipmentAmount0",
        "ShipmentCounter": "ShipmentCounter6",
        "Customer": {
          "CustomerCode": "CustomerCode8",
          "CustomerNumber": "CustomerNumber0",
          "Name": "Name8"
        }
      }
    ]
  },
  "Warnings": [
    {
      "Message": "Message0",
      "Code": "Code4"
    },
    {
      "Message": "Message0",
      "Code": "Code4"
    },
    {
      "Message": "Message0",
      "Code": "Code4"
    }
  ]
}
```

