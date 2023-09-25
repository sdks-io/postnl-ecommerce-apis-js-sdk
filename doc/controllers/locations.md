# Locations

### Summary

* Reason to Call: Retrieve a list of pick up points that support the option for direct delivery to a standard pick up point.
* Input: Address, city and country code of the preferred location Or longitude and latitude.
* Output: Locations nearest to the supplied address, location within the supplied area or location information of the location code.

Please note that you can use the all-in-one [Checkout API](#tag/Checkout) as well. This API combines he the functionality of the DeliveryDate, Location and Timeframe webservices. So it will be easier to implement the PostNL delivery options and there is less overhead in requesting the PostNL services by using this 3-in-1 API.

### Guidelines

At the <a href="https://developer.postnl.nl/" target="_blank" rel="noopener noreferrer">Developer Portal</a> you can find information about the use and functionality of the API. It is strongly recommended that you read this carefully before starting the implementation.

<button type="button">
  <a href="https://developer.postnl.nl/browse-apis/delivery-options/location-webservice/" target="_blank" rel="noopener noreferrer">Documentation</a>
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
      <td>Jul 22, 2013</td>
      <td>Not supported</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>v1_1</td>
      <td>Aug 21, 2014</td>
      <td>Supported</td>
      <td>See below</td>
      <td>Yes</td>
      <td>SOAP</td>
    </tr>
    <tr>
      <td>v2_0</td>
      <td>Aug 14, 2015</td>
      <td>Not supported</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>v2_1</td>
      <td>May 10, 2016</td>
      <td>Supported</td>
      <td>See below</td>
      <td>Yes</td>
      <td>REST and SOAP</td>
    </tr>
  </tbody>
</table>
### Release notes

#### v1.1

* The operation GetNearestLocations has been updated with new request properties:
  * Countrycode [M] has been added for international locations
  * Location.City [O] has been added for better international matching
  * Location.HouseNr [O] has been added for better international matching
  * Location.HouseNrExt [O] has been added for better international matching
  * Location.Street [O] has been added for better international matching
* The operation GetLocationsInArea has been updated with new request properties:
  * Countrycode [M] has been added for international locations
  * The operation GetBLSLocation has been removed
  * The operation GetLocation has been added
  * The Location Type has been extended with international address properties.

#### v2.1

* The Location Type has been extended with PartnerLocationCodes (ResponseLocationCode).
* If applicable, sustainability scores are now returned for each option

```ts
const locationsController = new LocationsController(client);
```

## Class Name

`LocationsController`

## Methods

* [Returns Pickup Locations Nearest to the Provided Address](../../doc/controllers/locations.md#returns-pickup-locations-nearest-to-the-provided-address)
* [Returns Pickup Locations Nearest to the Provided Coordinates](../../doc/controllers/locations.md#returns-pickup-locations-nearest-to-the-provided-coordinates)
* [Returns Pickup Locations Within a Provided Area](../../doc/controllers/locations.md#returns-pickup-locations-within-a-provided-area)
* [Returns a Specific Pickup Location](../../doc/controllers/locations.md#returns-a-specific-pickup-location)


# Returns Pickup Locations Nearest to the Provided Address

Request example:

```
curl -X GET "https://api-sandbox.postnl.nl/shipment/v2_1/locations/nearest?CountryCode=NL&PostalCode=2132WT&City=Hoofddorp&Street=Siriusdreef&HouseNumber=42&HouseNumberExtension=-60&DeliveryDate=24-12-2022&OpeningTime=09%3A00%3A00" \
 -H "Accept: application/json" \
 -H "apikey: APIKEY-HERE" \
```

```ts
async returnsPickupLocationsNearestToTheProvidedAddress(
  countryCode: CountryCode1Enum,
  postalCode: string,
  city?: string,
  street?: string,
  houseNumber?: number,
  houseNumberExtension?: string,
  deliveryDate?: string,
  openingTime?: string,
  deliveryOptions?: DeliveryOption1Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<LocationsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `countryCode` | [`CountryCode1Enum`](../../doc/models/country-code-1-enum.md) | Query, Required | The country of the recipient's address |
| `postalCode` | [`string`](../../doc/models/string-enum.md) | Query, Required | The zipcode of the recipient's address<br>**Constraints**: *Pattern*: `^[0-9]{4}([A-Z]{2})?$` |
| `city` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | The city of the recipient's address |
| `street` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | The street name of the recipient's address |
| `houseNumber` | `number \| undefined` | Query, Optional | The house number of the recipient's address |
| `houseNumberExtension` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | The house number extension of the recipient's address |
| `deliveryDate` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | The date of the earliest delivery date at the pickup location. Format:  dd-MM-yyyy. Note: this date cannot be in the past, otherwise an error is returned. If not provided, the present day is used as a default<br>**Constraints**: *Pattern*: `^[0-3]\d-[0-1]\d-[1-2]\d{3}$` |
| `openingTime` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | Opening time filter. Format: hh:mm:ss. This field will be used to filter out locations that are closed at the time provided. If no opening time is provided all locations will be returned regardless of their opening times.<br>**Constraints**: *Pattern*: `^[0-2]\d:[0-5]\d:[0-5]\d$` |
| `deliveryOptions` | [`DeliveryOption1Enum[] \| undefined`](../../doc/models/delivery-option-1-enum.md) | Query, Optional | The pickup location types for which locations should be filtered. By default all location types are returned (PG = Retail points and parcel lockers). This can be used to filter on only parcel lockers (PA) or specifically exclude parcel lockers from the response (PG_EX). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LocationsResponse`](../../doc/models/locations-response.md)

## Example Usage

```ts
const countryCode = CountryCode1Enum.NL;

const postalCode = '2132WT';

const city = 'Hoofddorp';

const street = 'Siriusdreef';

const houseNumber = 42;

const houseNumberExtension = '-60';

const deliveryDate = '24-12-2022';

const openingTime = '09:00:00';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await locationsController.returnsPickupLocationsNearestToTheProvidedAddress(
  countryCode,
  postalCode,
  city,
  street,
  houseNumber,
  houseNumberExtension,
  deliveryDate,
  openingTime
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
| 400 | Invalid request | [`LocationsResponseInvalidError`](../../doc/models/locations-response-invalid-error.md) |
| 401 | Unauthorized | [`PostCIFLocationUnauthorizedError`](../../doc/models/post-cif-location-unauthorized-error.md) |
| 405 | Method not allowed | [`PostCIFLocationMethodNotAllowedError`](../../doc/models/post-cif-location-method-not-allowed-error.md) |
| 429 | Too many requests | [`PostCIFLocationTooManyRequestError`](../../doc/models/post-cif-location-too-many-request-error.md) |
| 500 | Internal server error | [`LocationsResponseError`](../../doc/models/locations-response-error.md) |


# Returns Pickup Locations Nearest to the Provided Coordinates

Request example:

```
curl -X GET "https://api-sandbox.postnl.nl/shipment/v2_1/locations/nearest/geocode?Latitude=52.2864669620795&Longitude=4.68239055845954&CountryCode=NL&DeliveryDate=24-12-2022&OpeningTime=09%3A00%3A00" \
 -H "Accept: application/json" \
 -H "apikey: APIKEY-HERE" \
```

```ts
async returnsPickupLocationsNearestToTheProvidedCoordinates(
  latitude: number,
  longitude: number,
  countryCode: CountryCode1Enum,
  deliveryDate?: string,
  openingTime?: string,
  deliveryOptions?: DeliveryOptions1Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<LocationsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `latitude` | `number` | Query, Required | The latitude of the location |
| `longitude` | `number` | Query, Required | The longitude of the location |
| `countryCode` | [`CountryCode1Enum`](../../doc/models/country-code-1-enum.md) | Query, Required | The coutry for which the coordinates are provided |
| `deliveryDate` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | The date of the earliest delivery date. Format:  dd-MM-yyyy. Note: this date cannot be in the past, otherwise an error is returned.<br>**Constraints**: *Pattern*: `^[0-3]\d-[0-1]\d-[1-2]\d{3}$` |
| `openingTime` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | Opening time filter. Format: hh:mm:ss. This field will be used to filter out locations that are closed at the time provided.<br>**Constraints**: *Pattern*: `^[0-2]\d:[0-5]\d:[0-5]\d$` |
| `deliveryOptions` | [`DeliveryOptions1Enum[] \| undefined`](../../doc/models/delivery-options-1-enum.md) | Query, Optional | The pickup location types for which locations should be filtered. By default all location types are returned (PG = Retail points and parcel lockers). This can be used to filter on only parcel lockers (PA) or specifically exclude parcel lockers from the response (PG_EX). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LocationsResponse`](../../doc/models/locations-response.md)

## Example Usage

```ts
const latitude = 52.2864669620795;

const longitude = 4.68239055845954;

const countryCode = CountryCode1Enum.NL;

const deliveryDate = '24-12-2022';

const openingTime = '09:00:00';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await locationsController.returnsPickupLocationsNearestToTheProvidedCoordinates(
  latitude,
  longitude,
  countryCode,
  deliveryDate,
  openingTime
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
| 400 | Invalid request | [`LocationsResponseInvalidError`](../../doc/models/locations-response-invalid-error.md) |
| 401 | Unauthorized | [`PostCIFLocationUnauthorizedError`](../../doc/models/post-cif-location-unauthorized-error.md) |
| 405 | Method not allowed | [`PostCIFLocationMethodNotAllowedError`](../../doc/models/post-cif-location-method-not-allowed-error.md) |
| 429 | Too many requests | [`PostCIFLocationTooManyRequestError`](../../doc/models/post-cif-location-too-many-request-error.md) |
| 500 | Internal server error | [`LocationsResponseError`](../../doc/models/locations-response-error.md) |


# Returns Pickup Locations Within a Provided Area

Request example:

```
curl -X GET "https://api-sandbox.postnl.nl/shipment/v2_1/locations/area?LatitudeNorth=52.156439&LongitudeWest=5.015643&LatitudeSouth=52.017473&LongitudeEast=5.065254&CountryCode=NL&DeliveryDate=24-12-2023&OpeningTime=09%3A00%3A00" \
 -H "Accept: application/json" \
 -H "apikey: APIKEY-HERE" \
```

```ts
async returnsPickupLocationsWithinAProvidedArea(
  latitudeNorth: number,
  longitudeWest: number,
  latitudeSouth: number,
  longitudeEast: number,
  countryCode: CountryCode1Enum,
  deliveryDate?: string,
  openingTime?: string,
  deliveryOptions?: DeliveryOptions1Enum[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<LocationsResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `latitudeNorth` | `number` | Query, Required | The northmost coordinates of the area |
| `longitudeWest` | `number` | Query, Required | The westmost coordinates of the area |
| `latitudeSouth` | `number` | Query, Required | The southmost coordinates of the area |
| `longitudeEast` | `number` | Query, Required | The eastmost coordinates of the area |
| `countryCode` | [`CountryCode1Enum`](../../doc/models/country-code-1-enum.md) | Query, Required | - |
| `deliveryDate` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | The date of the earliest delivery date. Format:  dd-MM-yyyy. Note: this date cannot be in the past, otherwise an error is returned.<br>**Constraints**: *Pattern*: `^[0-3]\d-[0-1]\d-[1-2]\d{3}$` |
| `openingTime` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | Opening time filter. Format: hh:mm:ss. This field will be used to filter out locations that are closed at the time provided.<br>**Constraints**: *Pattern*: `^[0-2]\d:[0-5]\d:[0-5]\d$` |
| `deliveryOptions` | [`DeliveryOptions1Enum[] \| undefined`](../../doc/models/delivery-options-1-enum.md) | Query, Optional | The pickup location types for which locations should be filtered. By default all location types are returned (PG = Retail points and parcel lockers). This can be used to filter on only parcel lockers (PA) or specifically exclude parcel lockers from the response (PG_EX). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LocationsResponse`](../../doc/models/locations-response.md)

## Example Usage

```ts
const latitudeNorth = 52.156439;

const longitudeWest = 5.015643;

const latitudeSouth = 52.017473;

const longitudeEast = 5.065254;

const countryCode = CountryCode1Enum.NL;

const deliveryDate = '24-12-2023';

const openingTime = '09:00:00';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await locationsController.returnsPickupLocationsWithinAProvidedArea(
  latitudeNorth,
  longitudeWest,
  latitudeSouth,
  longitudeEast,
  countryCode,
  deliveryDate,
  openingTime
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
| 400 | Invalid request | [`LocationsResponseInvalidError`](../../doc/models/locations-response-invalid-error.md) |
| 401 | Unauthorized | [`PostCIFLocationUnauthorizedError`](../../doc/models/post-cif-location-unauthorized-error.md) |
| 405 | Method not allowed | [`PostCIFLocationMethodNotAllowedError`](../../doc/models/post-cif-location-method-not-allowed-error.md) |
| 429 | Too many requests | [`PostCIFLocationTooManyRequestError`](../../doc/models/post-cif-location-too-many-request-error.md) |
| 500 | Internal server error | [`LocationsResponseError`](../../doc/models/locations-response-error.md) |


# Returns a Specific Pickup Location

Request example:

```
curl -X GET "https://api-sandbox.postnl.nl/shipment/v2_1/locations/lookup?LocationCode=216877" \
 -H "Accept: application/json" \
 -H "apikey: APIKEY-HERE" 
```

```ts
async returnsASpecificPickupLocation(
  locationCode: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<LocationResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `locationCode` | [`string`](../../doc/models/string-enum.md) | Query, Required | LocationCode information |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`LocationResponse`](../../doc/models/location-response.md)

## Example Usage

```ts
const locationCode = '216877';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await locationsController.returnsASpecificPickupLocation(locationCode);
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
| 400 | Invalid request | [`LocationsResponseInvalidError`](../../doc/models/locations-response-invalid-error.md) |
| 401 | Unauthorized | [`PostCIFLocationUnauthorizedError`](../../doc/models/post-cif-location-unauthorized-error.md) |
| 405 | Method not allowed | [`PostCIFLocationMethodNotAllowedError`](../../doc/models/post-cif-location-method-not-allowed-error.md) |
| 429 | Too many requests | [`PostCIFLocationTooManyRequestError`](../../doc/models/post-cif-location-too-many-request-error.md) |
| 500 | Invalid request | [`LocationsResponseError`](../../doc/models/locations-response-error.md) |

