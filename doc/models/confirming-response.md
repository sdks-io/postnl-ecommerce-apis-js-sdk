
# Confirming Response

## Structure

`ConfirmingResponse`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `responseShipments` | [`ResponseShipment[] \| undefined`](../../doc/models/response-shipment.md) | Optional | - |

## Example (as JSON)

```json
{
  "ResponseShipments": [
    {
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
      ],
      "Barcode": "Barcode0"
    }
  ]
}
```

