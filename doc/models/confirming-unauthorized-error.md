
# Confirming Unauthorized Error

## Structure

`ConfirmingUnauthorizedError`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `message` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | - |
| `httpStatusCode` | `number \| undefined` | Optional | - |

## Example (as JSON)

```json
{
  "message": "Failed to resolve API Key variable 'request.header.apikey'",
  "http_status_code": 401.0
}
```

