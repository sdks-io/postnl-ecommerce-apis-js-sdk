
# Signature

## Structure

`Signature`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `barcode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The barcode of the shipment for which the signature is returned |
| `signatureDate` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The date of the signature |
| `signatureImage` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The signature content; base64 encoded GIF format. |

## Example (as JSON)

```json
{
  "Barcode": "3SDEVC317858754",
  "SignatureDate": "11/07/2022 19:28:16",
  "SignatureImage": "iVBORw0KGgoAAAANSUhEUgAAAogAAAGTCAYAAACrs[TRUNCATED]"
}
```

