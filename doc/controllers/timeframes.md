# Timeframes

### Summary

* Reason to Call: To get a timeframe in which a parcel is estimated to be delivered.
* Input: Details of dates, delivery options and the address of the recipient.
* Output: Expected delivery timeframes and the possible reason no timeframe could be given.

Please note that you can use the all-in-one [Checkout API](#tag/Checkout) as well. This API combines he the functionality of the DeliveryDate, Location and Timeframe webservices. So it will be easier to implement the PostNL delivery options and there is less overhead in requesting the PostNL services by using this 3-in-1 API.

### Guidelines

At the <a href="https://developer.postnl.nl/" target="_blank" rel="noopener noreferrer">Developer Portal</a> you can find information about the use and functionality of the API. It is strongly recommended that you read this carefully before starting the implementation.

<button type="button">
  <a href="https://developer.postnl.nl/browse-apis/delivery-options/timeframe-webservice/" target="_blank" rel="noopener noreferrer">Documentation</a>
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
      <td>Aug 14, 2014</td>
      <td>Not supported</td>
      <td/>
      <td/>
      <td/>
    </tr>
    <tr>
      <td>v1_2</td>
      <td>Oct 08, 2014</td>
      <td>Not supported</td>
      <td/>
      <td/>
      <td/>
    </tr>
    <tr>
      <td>v2_0</td>
      <td>Aug 14, 2015</td>
      <td>Supported</td>
      <td>See below</td>
      <td>Yes</td>
      <td>SOAP</td>
    </tr>
    <tr>
      <td>v2_1</td>
      <td>Jun 01, 2017</td>
      <td>Current version</td>
      <td>See below</td>
      <td>Yes</td>
      <td>REST</td>
    </tr>
  </tbody>
</table>
### Release notes

#### v1.2

* The following field has been added to the interface: Timeframe.SundaySorting*   Methods and TijdvakType replaced by options. The methods GetDeliveryTimeframes, GetDaytimeTimeframes, GetEveningTimeframes and GetMorningTimeframes have been replaced by a single GetTimeframes method. To specify the delivery option(s) for which timeframes should be returned, the field Options has been added to the Timeframe element.

#### v2.0

* The new options Sunday and Sameday are also available in the new GetTimeframes method. The field TijdvakType which indicated which delivery option was applicable to the returned Timeframe and ReasonNoTimeframe elements has been replaced by an Options field. This field uses the same values as the new Options field in the request.*   New and updated address fields. Several address fields have been added to the Timeframe element to specify the delivery address more precisely. These fields are: Street, HouseNrExt, City and CountryCode. CountryCode is a mandatory field. For an address in the Netherlands, specify NL for this field. Furthermore, the HouseNumber field has been renamed to HouseNr.

#### v2.1

* Added Option value ‘MyTime’ for delivery on demand.*   The following optional fields have been added to the interface (for the delivery on demand product):  
  Timeframe.Interval (used to filter certain timeframes which can be returned for delivery on demand)  
  Timeframe.TimeframeRange.Start (used to specify a specific range of timeframes to be returned for delivery on demand)  
  Timeframe.TimeframeRange.End
  
  __NOTE: THIS PRODUCT NO LONGER EXIST__

#### v2.2

* The following fields have been added to the interface:
  * OriginCountryCode
  * CutoffTime.Available
* If applicable, sustainability scores are now returned for each option

```ts
const timeframesController = new TimeframesController(client);
```

## Class Name

`TimeframesController`


# Retrieve Expected Delivery Timeframes

Request example:

```
curl -X GET "https://api-sandbox.postnl.nl/shipment/v2_1/calculate/timeframes?AllowSundaySorting=false&StartDate=30-06-2022&EndDate=02-07-2022&CountryCode=NL&PostalCode=2132WT&HouseNumber=42&HouseNrExt=A&City=Hoofddorp&Street=Siriusdreef&Options=Daytime%2CEvening" \
 -H "Accept: application/json" \
 -H "apikey: APIKEY-HERE" \
```

```ts
async retrieveExpectedDeliveryTimeframes(
  allowSundaySorting: boolean,
  startDate: string,
  endDate: string,
  countryCode: CountryCode1Enum,
  postalCode: string,
  houseNumber: number,
  options: Options1Enum[],
  houseNrExt?: string,
  city?: string,
  street?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<TimeframeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `allowSundaySorting` | `boolean` | Query, Required | Whether or not the requesting party allows for Sunday sorting (which leads to delivery on Monday). |
| `startDate` | [`string`](../../doc/models/string-enum.md) | Query, Required | Date of the beginning of the timeframe. Format: dd-MM-yyyy<br>**Constraints**: *Pattern*: `^([0-3]\d-[0-1]\d-[1-2]\d{3})$` |
| `endDate` | [`string`](../../doc/models/string-enum.md) | Query, Required | Date of the enddate of the timeframe. Format:dd-MM-yyyy. Enddate may not be before StartDate.<br>**Constraints**: *Pattern*: `^([0-3]\d-[0-1]\d-[1-2]\d{3})$` |
| `countryCode` | [`CountryCode1Enum`](../../doc/models/country-code-1-enum.md) | Query, Required | The ISO2 country code of the delivery address |
| `postalCode` | [`string`](../../doc/models/string-enum.md) | Query, Required | Zipcode of the delivery address<br>**Constraints**: *Pattern*: `^[0-9]{4}([A-Z]{2})?$` |
| `houseNumber` | `number` | Query, Required | The house number of the delivery address |
| `options` | [`Options1Enum[]`](../../doc/models/options-1-enum.md) | Query, Required | The delivery options for which expected timeframes should be calculated. At least one delivery option must be specified. Multiple values should be comma-separated. |
| `houseNrExt` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | House number extension of the delivery address |
| `city` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | City of the delivery address |
| `street` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | The street name of the delivery address |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`TimeframeResponse`](../../doc/models/timeframe-response.md)

## Example Usage

```ts
const allowSundaySorting = false;

const startDate = '30-06-2022';

const endDate = '02-07-2022';

const countryCode = CountryCode1Enum.NL;

const postalCode = '2132WT';

const houseNumber = 42;

const options: Options1Enum[] = [
  Options1Enum.Daytime,
  Options1Enum.Evening,
  Options1Enum.Sunday
];

const houseNrExt = 'A';

const city = 'Hoofddorp';

const street = 'Siriusdreef';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await timeframesController.retrieveExpectedDeliveryTimeframes(
  allowSundaySorting,
  startDate,
  endDate,
  countryCode,
  postalCode,
  houseNumber,
  options,
  houseNrExt,
  city,
  street
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
| 400 | Invalid request | [`TimeframeResponseInvalidError`](../../doc/models/timeframe-response-invalid-error.md) |
| 401 | Unauthorized | [`PostCIFTimeframeUnauthorizedError`](../../doc/models/post-cif-timeframe-unauthorized-error.md) |
| 405 | Method not allowed | [`PostCIFTimeframeMethodNotAllowedError`](../../doc/models/post-cif-timeframe-method-not-allowed-error.md) |
| 429 | Too many requests | [`PostCIFTimeframeTooManyRequestError`](../../doc/models/post-cif-timeframe-too-many-request-error.md) |
| 500 | Invalid request | [`TimeframeResponseError`](../../doc/models/timeframe-response-error.md) |

