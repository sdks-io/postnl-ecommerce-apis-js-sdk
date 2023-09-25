
# Error 7

## Structure

`Error7`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `error` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The error reason |
| `code` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The error code |
| `description` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The description of the error |

## Example (as JSON)

```json
{
  "Error": "Validation failed for shipment: 3SDEVC949511897",
  "Code": "1280202",
  "Description": "Incorrect address specified in address type Sender"
}
```

