
# Confirming Too Many Request Error

## Structure

`ConfirmingTooManyRequestError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | - |
| `httpStatusCode` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "message": "Too many requests. Rate limit exceeded!",
  "http_status_code": 429.0
}
```

