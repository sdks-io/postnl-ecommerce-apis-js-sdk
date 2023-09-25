
# Group

## Structure

`Group`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `groupType` | [`string`](../../doc/models/string-enum.md) | Required | Group sort that determines the type of group that is indicated. This is a code. For possible values, please see [here](#tag/Reference-codes/Group-types)<br>**Constraints**: *Pattern*: `^\d{2}$` |
| `groupSequence` | `number \| undefined` | Optional | Sequence number of the collo within the complete shipment (e.g. collo 2 of 4) Mandatory for multicollo shipments |
| `groupCount` | `number \| undefined` | Optional | Total number of colli in the shipment (in case of multicolli shipments) Mandatory for multicollo shipments |
| `mainBarcode` | [`string`](../../doc/models/string-enum.md) | Required | Main barcode for the shipment (in case of multicolli shipments) Mandatory for multicollo shipments<br>**Constraints**: *Minimum Length*: `11`, *Maximum Length*: `15` |

## Example (as JSON)

```json
{
  "GroupType": "03",
  "GroupSequence": 1,
  "GroupCount": 2,
  "MainBarcode": "3SDEVC7239264"
}
```

