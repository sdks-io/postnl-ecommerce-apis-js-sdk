
# Message

## Structure

`Message`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `messageID` | [`string`](../../doc/models/string-enum.md) | Required | ID of the message<br>**Constraints**: *Minimum Length*: `1`, *Maximum Length*: `12` |
| `messageTimeStamp` | [`string`](../../doc/models/string-enum.md) | Required | Date/time of sending the message. Format: dd-mm-yyyy hh:mm:ss<br>**Constraints**: *Pattern*: `^[0-3]\d-[01]\d-[12]\d{3}\s[0-2]\d:[0-5]\d:[0-5]\d$` |

## Example (as JSON)

```json
{
  "MessageID": "1",
  "MessageTimeStamp": "29-06-2016 12:00:00"
}
```

