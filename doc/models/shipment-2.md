
# Shipment 2

## Structure

`Shipment2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `mainBarcode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The main barcode of the shipment |
| `barcode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The barcode of the shipment |
| `shipmentAmount` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The amount of parcels in the multi-collo shipment |
| `shipmentCounter` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The sequence of this parcel in the multi-collo shipment |
| `customer` | [`Customer1 \| undefined`](../../doc/models/customer-1.md) | Optional | - |
| `productCode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The product code of the shipment |
| `productDescription` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The description of the product code |
| `reference` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The customer reference belonging to the shipment |
| `deliveryDate` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The expected delivery date of the shipment |
| `dimension` | [`Dimension1 \| undefined`](../../doc/models/dimension-1.md) | Optional | - |
| `address` | [`Address5[] \| undefined`](../../doc/models/address-5.md) | Optional | A list of addresses belonging to the shipment |
| `productOptions` | [`ProductOptions \| undefined`](../../doc/models/product-options.md) | Optional | A list of product options. |
| `status` | [`Status \| undefined`](../../doc/models/status.md) | Optional | The current status of the shipment (see the [Status codes](#tag/TandT-status-codes/Status-codes) for possible values. |

## Example (as JSON)

```json
{
  "MainBarcode": "3SDEVC6659149",
  "Barcode": "3SDEVC6659149",
  "ShipmentAmount": "2",
  "ShipmentCounter": "1",
  "ProductCode": "003085",
  "ProductDescription": "Standaard Zending",
  "Reference": "REF-1234567",
  "DeliveryDate": "2016-04-20",
  "Customer": {
    "CustomerCode": "CustomerCode8",
    "CustomerNumber": "CustomerNumber0",
    "Name": "Name8"
  }
}
```

