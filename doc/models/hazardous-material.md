
# Hazardous Material

## Structure

`HazardousMaterial`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `toxicSubstanceCode` | [`string`](../../doc/models/string-enum.md) | Required | Toxic substance code as stated in the ADR agreement |
| `additionalToxicSubstanceCode` | [`string[] \| undefined`](../../doc/models/string-enum.md) | Optional | Array of additional toxic substance codes as stated in the ADR agreement |
| `aDRPoints` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The amount of ADR points |
| `tunnelCode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The code indicating for which category of tunnels passage is prohibited with these goods. |
| `packagingGroupCode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Code identifying the category of the packaging material. |
| `packagingGroupDescription` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Description of the packaging material |
| `grossWeight` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Gross weight of the goods in grams. |
| `uNDGNumber` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The UNDG number |
| `transportCategoryCode` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The transport category code |
| `chemicalTechnicalDescription` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The chemical technical description of the goods. |

## Example (as JSON)

```json
{
  "ToxicSubstanceCode": "8",
  "AdditionalToxicSubstanceCode": [
    "1-11",
    "28-4"
  ],
  "ADRPoints": "30",
  "TunnelCode": "(E)",
  "PackagingGroupCode": "III",
  "PackagingGroupDescription": "Jerrycan plastic",
  "GrossWeight": "30000",
  "UNDGNumber": "UN 1760",
  "TransportCategoryCode": "3",
  "ChemicalTechnicalDescription": "FOSFORZUUR"
}
```

