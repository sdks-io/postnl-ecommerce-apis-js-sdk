
# Contact 1

## Structure

`Contact1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `contactType` | [`string`](../../doc/models/string-enum.md) | Required | Type of the contact. This is a code. Please refer to the available [Contact types](#tag/Reference-codes/Contact-types) for the possible values.<br>**Constraints**: *Pattern*: `^\d{2}$` |
| `email` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Email address of the contact. Mandatory in some cases. Please see [Guidelines](https://developer.postnl.nl/browse-apis/send-and-track/labelling-webservice/).<br>**Constraints**: *Minimum Length*: `0`, *Maximum Length*: `50` |
| `sMSNr` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Mobile phone number of the contact. Mandatory in some cases. Please see [Guidelines](https://developer.postnl.nl/browse-apis/send-and-track/labelling-webservice/).<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `17` |
| `telNr` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | Phone number of the contact<br>**Constraints**: *Minimum Length*: `10`, *Maximum Length*: `17` |

## Example (as JSON)

```json
{
  "ContactType": "01",
  "Email": "receiver@email.com",
  "SMSNr": "+31612345678",
  "TelNr": "+31301234567"
}
```

