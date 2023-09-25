
# Location 1

## Structure

`Location1`

## Fields

| Name | Type | Tags | Description |
|  --- | --- | --- | --- |
| `address` | [`Address2 \| undefined`](../../doc/models/address-2.md) | Optional | - |
| `deliveryOptions` | [`DeliveryOptions \| undefined`](../../doc/models/delivery-options.md) | Optional | The options belonging to the pickup location. The delivery options RETA, UL, PU, DO, BW, RT and BWUL can be shown in the response. Please ignore these codes. These codes are internal PostNL codes. |
| `distance` | `number \| undefined` | Optional | The distance from the address/coordinates provided in the request to the pickup location returned. Distance in meters. |
| `latitude` | `number \| undefined` | Optional | The latitude of the pickup location |
| `locationCode` | `number \| undefined` | Optional | The pickup location identifier |
| `longitude` | `number \| undefined` | Optional | The longitude of the pickup location |
| `name` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The name of the pickup location |
| `openingHours` | [`OpeningHours1 \| undefined`](../../doc/models/opening-hours-1.md) | Optional | The standard opening times of the pickup location |
| `sustainability` | [`Sustainability2 \| undefined`](../../doc/models/sustainability-2.md) | Optional | Sustainability score; see [Sustainability codes](#tag/Reference-codes/Sustainability-codes) for possible values. |
| `partnerName` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The partner name belonging to the pickup location. Can be ignored, no longer used. |
| `retailNetworkID` | [`string \| undefined`](../../doc/models/string-enum.md) | Optional | The retail network belonging to the pickup location. Can be ignored, no longer used |

## Example (as JSON)

```json
{
  "Distance": 102,
  "Latitude": 52.10223388,
  "LocationCode": 163043,
  "Longitude": 5.13634192,
  "Name": "Tonys Tabakszaak",
  "PartnerName": "PostNL",
  "RetailNetworkID": "PNPNL-01",
  "Address": {
    "City": "City6",
    "Countrycode": "Countrycode2",
    "HouseNr": 136,
    "HouseNrExt": "HouseNrExt4",
    "Remark": "Remark8"
  },
  "DeliveryOptions": {
    "string": [
      "string6",
      "string7"
    ]
  }
}
```

