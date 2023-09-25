
# Cut Off Time

## Structure

`CutOffTime`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `day` | [`DayEnum`](../../doc/models/day-enum.md) | Required | The day for which the cutoff time applies. 00 is your default cutoff that applies to all otherwise not specified days, 01 to 07 is Monday to Sunday. |
| `available` | `boolean \| undefined` | Optional | Specifies whether you are available to process shipments during the selected day |
| `type` | [`TypeEnum \| undefined`](../../doc/models/type-enum.md) | Optional | Specifies the type belonging to the cutoff time. |
| `time` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Specifies the cutoff time (mandatory when Available is true)<br>**Constraints**: *Pattern*: `^[0-2]\d:[0-5]\d:[0-5]\d$` |

## Example (as JSON)

```json
{
  "Day": "00",
  "Available": true,
  "Type": "Regular",
  "Time": "23:00:00"
}
```

