
# Warning

## Structure

`Warning`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deliveryDate` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Deliverydate that triggered the warning |
| `code` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Warning code (for a possible list of warnings, see the generic error codes page) |
| `description` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Warning description (for a possible list of warnings, see the generic error codes page) |
| `options` | [`Option2Enum[] \| undefined`](../../doc/models/option-2-enum.md) | Optional | The option that triggered the warning |

## Example (as JSON)

```json
{
  "DeliveryDate": "07-07-2019",
  "Code": "5034",
  "Description": "No delivery option found on date",
  "Options": [
    "08:00-12:00",
    "08:00-17:00"
  ]
}
```

