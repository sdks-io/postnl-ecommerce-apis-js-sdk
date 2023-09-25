
# Amount 2

## Structure

`Amount2`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `amountType` | [`string`](../../doc/models/string-enum.md) | Required | Amount type. Please see [Amount types](#tag/Reference-codes/Amount-types) for the available types.<br>**Constraints**: *Pattern*: `^\d{2}$` |
| `accountName` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Name of bank account owner<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `35` |
| `bIC` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | BIC number,optional for COD shipments (mandatory for bank account number other than originating in The Netherlands)<br>**Constraints**: *Minimum Length*: `8`, *Maximum Length*: `11` |
| `currency` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Currency code according ISO 4217. E.g. EUR<br>**Constraints**: *Pattern*: `^[A-Z]{3}$` |
| `iBAN` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | IBAN bank account number,mandatory for COD shipments. Dutch IBAN numbers are 18 characters<br>**Constraints**: *Minimum Length*: `15`, *Maximum Length*: `31` |
| `reference` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Personal payment reference<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `35` |
| `transactionNumber` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Transaction number<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `35` |
| `value` | `number` | Required | Money value in EUR (unless value Currency is specified for another currency). Value format (N6.2): #####0.00 (2 digits behind decimal dot). Mandatory for COD, Insured products (with the exception of certain productcodes with a standard insured amount).<br>**Constraints**: `>= 0` |

## Example (as JSON)

```json
{
  "AmountType": "01",
  "AccountName": "C. de Ruiter",
  "BIC": "RABONL2UXXX",
  "Currency": "EUR",
  "IBAN": "NL00RABO0123456789",
  "Reference": "1234-5678",
  "TransactionNumber": "1234",
  "Value": 20.35
}
```
