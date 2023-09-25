
# Reason No Timeframe

## Structure

`ReasonNoTimeframe`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `code` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The reason code |
| `date` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The date associated with the reason no timeframe was calculated |
| `description` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The description associated with the reason no timeframe was calculated |
| `options` | [`Options3 \| undefined`](../../doc/models/options-3.md) | Optional | The option for which no timeframe was calculated for a specific date |
| `sustainability` | [`Sustainability4 \| undefined`](../../doc/models/sustainability-4.md) | Optional | Sustainability score |

## Example (as JSON)

```json
{
  "Code": "1",
  "Date": "02-07-2022",
  "Description": "Delivery date not allowed",
  "Options": {
    "string": "Morning"
  },
  "Sustainability": {
    "Code": "Code2",
    "Description": "Description4"
  }
}
```

