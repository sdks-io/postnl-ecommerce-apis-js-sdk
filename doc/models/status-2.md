
# Status 2

The status update. See [Status codes](#tag/TandT-status-codes/Status-codes) for possible values.

## Structure

`Status2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `timestamp` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The timestamp of the update |
| `statusCode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The status code |
| `statusDescription` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The status description |
| `phaseCode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The phase code |
| `phaseDescription` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The phase description |

## Example (as JSON)

```json
{
  "Timestamp": "11/07/2022 12:36:41",
  "StatusCode": "1",
  "StatusDescription": "Zending voorgemeld",
  "PhaseCode": "1",
  "PhaseDescription": "Collectie"
}
```

