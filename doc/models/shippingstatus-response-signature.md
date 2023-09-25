
# Shippingstatus Response Signature

## Structure

`ShippingstatusResponseSignature`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `signature` | [`Signature \| undefined`](../../doc/models/signature.md) | Optional | - |
| `warnings` | [`Warnings \| undefined`](../../doc/models/warnings.md) | Optional | - |

## Example (as JSON)

```json
{
  "Signature": {
    "Barcode": "Barcode2",
    "SignatureDate": "SignatureDate0",
    "SignatureImage": "SignatureImage6"
  },
  "Warnings": {
    "Warning": {
      "Message": "Message0",
      "Code": "Code4"
    }
  }
}
```

