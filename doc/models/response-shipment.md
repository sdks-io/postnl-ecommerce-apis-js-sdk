
# Response Shipment

## Structure

`ResponseShipment`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `errors` | [`Error6[] \| undefined`](../../doc/models/error-6.md) | Optional | Possible errors. See the [Error Codes](#tag/Error codes) for possible values |
| `warnings` | [`Warning1[] \| undefined`](../../doc/models/warning-1.md) | Optional | Possible warnings. See the [Error Codes](#tag/Error codes) for possible values |
| `barcode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The barcode used |

## Example (as JSON)

```json
{
  "Barcode": "3SDEVC281677095",
  "Errors": [
    {
      "code": "code2",
      "description": "description6"
    },
    {
      "code": "code2",
      "description": "description6"
    }
  ],
  "Warnings": [
    {
      "Code": "Code4",
      "Description": "Description8"
    }
  ]
}
```

