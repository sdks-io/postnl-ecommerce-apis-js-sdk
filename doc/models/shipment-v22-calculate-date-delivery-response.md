
# Shipment V22 Calculate Date Delivery Response

## Structure

`ShipmentV22CalculateDateDeliveryResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deliveryDate` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | - |
| `options` | [`Options \| undefined`](../../doc/models/options.md) | Optional | The delivery options for which a delivery date is returned. Only one delivery option is specified. See [Delivery Options](#tag/Reference-codes/Delivery-options) for possible values. |
| `sustainability` | [`Sustainability2 \| undefined`](../../doc/models/sustainability-2.md) | Optional | Sustainability score; see [Sustainability codes](#tag/Reference-codes/Sustainability-codes) for possible values. |

## Example (as JSON)

```json
{
  "DeliveryDate": "30-05-2022",
  "Options": {
    "string": "Today"
  },
  "Sustainability": {
    "Code": "Code2",
    "Description": "Description4"
  }
}
```

