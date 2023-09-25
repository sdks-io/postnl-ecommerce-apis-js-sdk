
# Response Shipment 1

## Structure

`ResponseShipment1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `productCodeDelivery` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The product code of the shipment |
| `labels` | [`Label1[] \| undefined`](../../doc/models/label-1.md) | Optional | All labels belonging to the selected product |
| `barcode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The barcode used on the label |
| `warnings` | [`Warnings1[] \| undefined`](../../doc/models/warnings-1.md) | Optional | Possible warnings. See the [Error Codes](#tag/Error-codes) for possible values |

## Example (as JSON)

```json
{
  "ProductCodeDelivery": "3085",
  "Barcode": "3SDEVC281677095",
  "Labels": [
    {
      "Content": "Content4",
      "Labeltype": "Labeltype2",
      "OutputType": "OutputType4"
    },
    {
      "Content": "Content4",
      "Labeltype": "Labeltype2",
      "OutputType": "OutputType4"
    }
  ],
  "Warnings": [
    {
      "Code": "Code4",
      "Description": "Description8"
    },
    {
      "Code": "Code4",
      "Description": "Description8"
    },
    {
      "Code": "Code4",
      "Description": "Description8"
    }
  ]
}
```

