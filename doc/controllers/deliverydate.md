# Deliverydate

### Summary

* Calculate expected delivery date based on shipping date or required shipping date based on requested delivery date.
* Input: Address, postalcode, shipping- or delivery date and delivery options.
* Output: Delivery date and Sent date.

Please note that you can use the all-in-one [Checkout API](#tag/Checkout) as well. This API combines he the functionality of the DeliveryDate, Location and Timeframe webservices. So it will be easier to implement the PostNL delivery options and there is less overhead in requesting the PostNL services by using this 3-in-1 API.

### Guidelines

At the <a href="https://developer.postnl.nl/" target="_blank" rel="noopener noreferrer">Developer Portal</a> you can find information about the use and functionality of the API. It is strongly recommended that you read this carefully before starting the implementation.

<button type="button">
  <a href="https://developer.postnl.nl/browse-apis/delivery-options/deliverydate-webservice/" target="_blank" rel="noopener noreferrer">Documentation</a>
</button>
### Versioning

<table>
  <tbody>
    <tr>
      <th>API</th>
      <th>Release date</th>
      <th>Status</th>
      <th>Release notes</th>
      <th>Schema changes</th>
      <th>Available as</th>
    </tr>
    <tr>
      <td>v1_0</td>
      <td>Oct 07, 2013</td>
      <td>Not supported</td>
      <td/>
      <td/>
      <td/>
    </tr>
    <tr>
      <td>v1_1</td>
      <td>Jan 24, 2014</td>
      <td>Not supported</td>
      <td/>
      <td/>
      <td/>
    </tr>
    <tr>
      <td>v1_2</td>
      <td>Aug 14, 2014</td>
      <td>Not supported</td>
      <td/>
      <td/>
      <td/>
    </tr>
    <tr>
      <td>v2_0</td>
      <td>Aug 14, 2015</td>
      <td>Not supported</td>
      <td/>
      <td/>
      <td/>
    </tr>
    <tr>
      <td>v2_1</td>
      <td>Nov 03, 2015</td>
      <td>Supported</td>
      <td>See below</td>
      <td>Yes</td>
      <td>SOAP</td>
    </tr>
    <tr>
      <td>v2_2</td>
      <td>Aug 24, 2017</td>
      <td>Current version</td>
      <td>See below</td>
      <td>Yes</td>
      <td>REST and SOAP</td>
    </tr>
  </tbody>
</table>
### Release notes

#### v2.0

* CutOffTime and CutOffTimeForSundaySorting replaced by CutOffTimes list. In the previous version of the GetDeliveryDate method, cut off times were specified for weekdays and Sunday in two fields. It is now possible to specify cut off times for every day of the week in the new CutOffTimes field.*   Options field added. It is now possible to specify which delivery options should be considered when returning a delivery or sent date using the new Options field.*   New and updated address fields. Several address fields have been added to the GetDeliveryDate and GetSendDate elements to specify the delivery address more precisely. These fields are: Street, HouseNrExt, City and CountryCode.  
  Furthermore, the HouseNumber field has been renamed to HouseNr.

#### v2.1

* GetDeliveryDateResponse.Option is removed from the interface. The GetDeliveryDateResponse.Options is added to the interface.

#### v2.2

* Thee following fields have been added to the interface:  
  OriginCountryCode  
  CutoffTime.Available  
  New delivery option: MyTime (Delivery on demand)
  
  __NOTE: THIS PRODUCT NO LONGER EXIST__

* If applicable, sustainability scores are now returned for each option

```ts
const deliverydateController = new DeliverydateController(client);
```

## Class Name

`DeliverydateController`

## Methods

* [Calculate Expected Delivery Date](../../doc/controllers/deliverydate.md#calculate-expected-delivery-date)
* [Calculate Required Shipping Date](../../doc/controllers/deliverydate.md#calculate-required-shipping-date)


# Calculate Expected Delivery Date

Request example:

```
curl -X GET "https://api-sandbox.postnl.nl/shipment/v2_2/calculate/date/delivery?ShippingDate=29-05-2022+14%3A00%3A00&amp;ShippingDuration=1&amp;CutOffTime=17%3A00%3A00&amp;PostalCode=2132WT&amp;CountryCode=NL&amp;City=Hoofddorp&amp;Street=Siriusdreef&amp;HouseNumber=42&amp;HouseNrExt=A" \
 -H "Accept: application/json" \
 -H "apikey: APIKEY-HERE" 
```

```ts
async calculateExpectedDeliveryDate(
  shippingDate: string,
  shippingDuration: number,
  cutOffTime: string,
  postalCode: string,
  countryCode: CountryCode1Enum,
  options: Option3Enum[],
  originCountryCode?: OriginCountryCodeEnum,
  city?: string,
  street?: string,
  houseNumber?: number,
  houseNrExt?: string,
  cutOffTimeMonday?: string,
  availableMonday?: boolean,
  cutOffTimeTuesday?: string,
  availableTuesday?: boolean,
  cutOffTimeWednesday?: string,
  availableWednesday?: boolean,
  cutOffTimeThursday?: string,
  availableThursday?: boolean,
  cutOffTimeFriday?: string,
  availableFriday?: boolean,
  cutOffTimeSaturday?: string,
  availableSaturday?: boolean,
  cutOffTimeSunday?: string,
  availableSunday?: boolean,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ShipmentV22CalculateDateDeliveryResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `shippingDate` | [`string`](../../doc/models/string-enum.md) | Query, Required | Date/time of preparing the shipment for sending. Format: dd-MM-yyyy hh:mm:ss<br>**Constraints**: *Pattern*: `^[0-3]\d-[0-1]\d-[1-2]\d{3}\s[0-2]\d:[0-5]\d:[0-5]\d$` |
| `shippingDuration` | `number` | Query, Required | The duration it takes for the shipment to be delivered to PostNL in days. A value of 1 means that the parcel will be delivered to PostNL on the same day as the date specified in ShippingDate. A value of 2 means the parcel will arrive at PostNL a day later etc. |
| `cutOffTime` | [`string`](../../doc/models/string-enum.md) | Query, Required | Default cutoff time<br>**Constraints**: *Pattern*: `^[0-2]\d:[0-5]\d:[0-5]\d$` |
| `postalCode` | [`string`](../../doc/models/string-enum.md) | Query, Required | Zipcode of the destination address<br>**Constraints**: *Pattern*: `^[0-9]{4}([A-Z]{2})?$` |
| `countryCode` | [`CountryCode1Enum`](../../doc/models/country-code-1-enum.md) | Query, Required | The ISO2 destination country code |
| `options` | [`Option3Enum[]`](../../doc/models/option-3-enum.md) | Query, Required | The delivery options that you want to take into account when calculating the expected delivery date |
| `originCountryCode` | [`OriginCountryCodeEnum \| undefined`](../../doc/models/origin-country-code-enum.md) | Query, Optional | The ISO2 origin country code<br>**Default**: `OriginCountryCodeEnum.NL` |
| `city` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | City of the destination address |
| `street` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | The street name of the destination address. |
| `houseNumber` | `number \| undefined` | Query, Optional | The house number of the destination address |
| `houseNrExt` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | House number extension of the delivery address |
| `cutOffTimeMonday` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | Overrides default cutoff time specified in the CutOffTime parameter for mondays specifically<br>**Constraints**: *Pattern*: `^[0-2]\d:[0-5]\d:[0-5]\d$` |
| `availableMonday` | `boolean \| undefined` | Query, Optional | Specifies if you are available to ship to PostNL on mondays |
| `cutOffTimeTuesday` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | Overrides default cutoff time specified in the CutOffTime parameter for tuesdays specifically<br>**Constraints**: *Pattern*: `^[0-2]\d:[0-5]\d:[0-5]\d$` |
| `availableTuesday` | `boolean \| undefined` | Query, Optional | Specifies if you are available to ship to PostNL on tuesdays |
| `cutOffTimeWednesday` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | Overrides default cutoff time specified in the CutOffTime parameter for wednesdays specifically<br>**Constraints**: *Pattern*: `^[0-2]\d:[0-5]\d:[0-5]\d$` |
| `availableWednesday` | `boolean \| undefined` | Query, Optional | Specifies if you are available to ship to PostNL on wednesdays |
| `cutOffTimeThursday` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | Overrides default cutoff time specified in the CutOffTime parameter for thursdays specifically<br>**Constraints**: *Pattern*: `^[0-2]\d:[0-5]\d:[0-5]\d$` |
| `availableThursday` | `boolean \| undefined` | Query, Optional | Specifies if you are available to ship to PostNL on thursdays |
| `cutOffTimeFriday` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | Overrides default cutoff time specified in the CutOffTime parameter for fridays specifically<br>**Constraints**: *Pattern*: `^[0-2]\d:[0-5]\d:[0-5]\d$` |
| `availableFriday` | `boolean \| undefined` | Query, Optional | Specifies if you are available to ship to PostNL on fridays |
| `cutOffTimeSaturday` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | Overrides default cutoff time specified in the CutOffTime parameter for saturdays specifically<br>**Constraints**: *Pattern*: `^[0-2]\d:[0-5]\d:[0-5]\d$` |
| `availableSaturday` | `boolean \| undefined` | Query, Optional | Specifies if you are available to ship to PostNL on saturdays |
| `cutOffTimeSunday` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | Overrides default cutoff time specified in the CutOffTime parameter for sundays specifically<br>**Constraints**: *Pattern*: `^[0-2]\d:[0-5]\d:[0-5]\d$` |
| `availableSunday` | `boolean \| undefined` | Query, Optional | Specifies if you are available to ship to PostNL on sundays |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ShipmentV22CalculateDateDeliveryResponse`](../../doc/models/shipment-v22-calculate-date-delivery-response.md)

## Example Usage

```ts
const shippingDate = '29-05-2022 14:00:00';

const shippingDuration = 1;

const cutOffTime = '17:00:00';

const postalCode = '2132WT';

const countryCode = CountryCode1Enum.NL;

const options: Option3Enum[] = [
  Option3Enum.Sunday,
  Option3Enum.Today,
  Option3Enum.Afternoon
];

const originCountryCode = OriginCountryCodeEnum.NL;

const city = 'Hoofddorp';

const street = 'Siriusdreef';

const houseNumber = 42;

const houseNrExt = 'A';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await deliverydateController.calculateExpectedDeliveryDate(
  shippingDate,
  shippingDuration,
  cutOffTime,
  postalCode,
  countryCode,
  options,
  originCountryCode,
  city,
  street,
  houseNumber,
  houseNrExt
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`DeliverydateResponseInvalidError`](../../doc/models/deliverydate-response-invalid-error.md) |
| 401 | Invalid apikey | [`PostCIFDeliveryDateUnauthorizedError`](../../doc/models/post-cif-delivery-date-unauthorized-error.md) |
| 405 | Method not allowed | [`PostCIFDeliveryDateMethodNotAllowedError`](../../doc/models/post-cif-delivery-date-method-not-allowed-error.md) |
| 429 | Too many requests | [`PostCIFDeliveryDateTooManyRequestError`](../../doc/models/post-cif-delivery-date-too-many-request-error.md) |
| 500 | Internal server error | [`DeliverydateResponseError`](../../doc/models/deliverydate-response-error.md) |


# Calculate Required Shipping Date

Request example:

```
curl -X GET "https://api-sandbox.postnl.nl/shipment/v2_2/calculate/date/shipping?DeliveryDate=30-05-2022&amp;ShippingDuration=1&amp;PostalCode=2132WT&amp;CountryCode=NL&amp;City=Hoofddorp&amp;Street=Siriusdreef&amp;HouseNumber=42&amp;HouseNrExt=A" \
 -H "Accept: application/json" \
 -H "apikey: APIKEY-HERE" \

```

```ts
async calculateRequiredShippingDate(
  deliveryDate: string,
  shippingDuration: number,
  postalCode: string,
  countryCode: CountryCode1Enum,
  originCountryCode?: OriginCountryCodeEnum,
  city?: string,
  street?: string,
  houseNumber?: number,
  houseNrExt?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ShipmentV22CalculateDateShippingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `deliveryDate` | [`string`](../../doc/models/string-enum.md) | Query, Required | Date of the expected delivery (to the final destination) of the shipment.<br>**Constraints**: *Pattern*: `^[0-3]\d-[0-1]\d-[1-2]\d{3}$` |
| `shippingDuration` | `number` | Query, Required | The duration it takes for the shipment to be delivered to PostNL in days. A value of 1 means that the parcel will be delivered to PostNL on the same day as the date specified in ShippingDate. A value of 2 means the parcel will arrive at PostNL a day later etc. |
| `postalCode` | [`string`](../../doc/models/string-enum.md) | Query, Required | Zipcode of the address<br>**Constraints**: *Pattern*: `^[0-9]{4}([A-Z]{2})?$` |
| `countryCode` | [`CountryCode1Enum`](../../doc/models/country-code-1-enum.md) | Query, Required | The ISO2 destination country code |
| `originCountryCode` | [`OriginCountryCodeEnum \| undefined`](../../doc/models/origin-country-code-enum.md) | Query, Optional | The ISO2 country code of the origin country<br>**Default**: `OriginCountryCodeEnum.NL` |
| `city` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | City of the destination address |
| `street` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | The street name of the destination address |
| `houseNumber` | `number \| undefined` | Query, Optional | The house number of the destination address |
| `houseNrExt` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | House number extension of the destination address |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ShipmentV22CalculateDateShippingResponse`](../../doc/models/shipment-v22-calculate-date-shipping-response.md)

## Example Usage

```ts
const deliveryDate = '30-05-2022';

const shippingDuration = 1;

const postalCode = '2132WT';

const countryCode = CountryCode1Enum.NL;

const originCountryCode = OriginCountryCodeEnum.NL;

const city = 'Hoofddorp';

const street = 'Siriusdreef';

const houseNumber = 42;

const houseNrExt = 'A';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await deliverydateController.calculateRequiredShippingDate(
  deliveryDate,
  shippingDuration,
  postalCode,
  countryCode,
  originCountryCode,
  city,
  street,
  houseNumber,
  houseNrExt
);
  // Get more response info...
  // const { statusCode, headers } = httpResponse;
} catch (error) {
  if (error instanceof ApiError) {
    // @ts-expect-error: unused variables
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const errors = error.result;
    // const { statusCode, headers } = error;
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`DeliverydateResponseInvalidError`](../../doc/models/deliverydate-response-invalid-error.md) |
| 401 | Invalid apikey | [`PostCIFDeliveryDateUnauthorizedError`](../../doc/models/post-cif-delivery-date-unauthorized-error.md) |
| 405 | Method not allowed | [`PostCIFDeliveryDateMethodNotAllowedError`](../../doc/models/post-cif-delivery-date-method-not-allowed-error.md) |
| 429 | Too many requests | [`PostCIFDeliveryDateTooManyRequestError`](../../doc/models/post-cif-delivery-date-too-many-request-error.md) |
| 500 | Internal server error | [`DeliverydateResponseError`](../../doc/models/deliverydate-response-error.md) |

