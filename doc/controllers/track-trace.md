# Track Trace

```ts
const trackTraceController = new TrackTraceController(client);
```

## Class Name

`TrackTraceController`

## Methods

* [Returns the Statuses for a Particular Barcode](../../doc/controllers/track-trace.md#returns-the-statuses-for-a-particular-barcode)
* [Get Status Information by Customer Reference](../../doc/controllers/track-trace.md#get-status-information-by-customer-reference)
* [Returns the Signature of a Particular Shipment](../../doc/controllers/track-trace.md#returns-the-signature-of-a-particular-shipment)
* [Returns the Updated Statuses for a Particular Customer Number](../../doc/controllers/track-trace.md#returns-the-updated-statuses-for-a-particular-customer-number)


# Returns the Statuses for a Particular Barcode

Request example:

```
curl -X GET "https://api-sandbox.postnl.nl/shipment/v2/status/barcode/3SDEVC172649258" \
 -H "Accept: application/json" \
 -H "apikey: APIKEY-HERE" \
```

```ts
async returnsTheStatusesForAParticularBarcode(
  barcode: string,
  detail?: boolean,
  language?: LanguageEnum,
  maxDays?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ShippingstatusResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `barcode` | [`string`](../../doc/models/string-enum.md) | Template, Required | Barcode of the shipment. This is a unique value. |
| `detail` | `boolean \| undefined` | Query, Optional | Option to include old statuses in the response<br>**Default**: `false` |
| `language` | [`LanguageEnum \| undefined`](../../doc/models/language-enum.md) | Query, Optional | Language of the returned shipment and status descriptions (default is Dutch). |
| `maxDays` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | Limit the number of days that will be searched (decrease this amount for better performance). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ShippingstatusResponse`](../../doc/models/shippingstatus-response.md)

## Example Usage

```ts
const barcode = '3SDEVC172649258';

const detail = false;

const language = LanguageEnum.NL;

const maxDays = '14';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await trackTraceController.returnsTheStatusesForAParticularBarcode(
  barcode,
  detail,
  language,
  maxDays
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
| 400 | Invalid request | [`ShippingstatusResponseError`](../../doc/models/shippingstatus-response-error.md) |
| 401 | Invalid apikey | [`ShippingstatusUnauthorizedError`](../../doc/models/shippingstatus-unauthorized-error.md) |
| 405 | Method not allowed | [`ShippingstatusMethodNotAllowedError`](../../doc/models/shippingstatus-method-not-allowed-error.md) |
| 429 | Too many requests | [`ShippingstatusTooManyRequestError`](../../doc/models/shippingstatus-too-many-request-error.md) |
| 500 | Internal server error | [`ShippingstatusResponseError`](../../doc/models/shippingstatus-response-error.md) |


# Get Status Information by Customer Reference

Request example:

```
curl -X GET "https://api-sandbox.postnl.nl/shipment/v2/status/reference?detail=true&language=NL&customerCode={{CustomerCode}}&customerNumber={{CustomerNumber}}&reference=REF98173245876329" \
 -H "Accept: application/json" \
 -H "apikey: APIKEY-HERE" 
```

```ts
async getStatusInformationByCustomerReference(
  customerCode: string,
  customerNumber: string,
  referenceId: string,
  detail?: boolean,
  language?: LanguageEnum,
  maxDays?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ShippingstatusResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerCode` | [`string`](../../doc/models/string-enum.md) | Query, Required | Customer code as known at PostNL Pakketten |
| `customerNumber` | [`string`](../../doc/models/string-enum.md) | Query, Required | Customer number as known at PostNL Pakketten |
| `referenceId` | [`string`](../../doc/models/string-enum.md) | Template, Required | The customer reference belonging to the shipment |
| `detail` | `boolean \| undefined` | Query, Optional | Option to include old statuses in the response<br>**Default**: `false` |
| `language` | [`LanguageEnum \| undefined`](../../doc/models/language-enum.md) | Query, Optional | Language of the returned shipment and status descriptions (default is Dutch). |
| `maxDays` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | Limit the number of days that will be searched (decrease this amount for better performance). By default this is 90 days in the past. |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ShippingstatusResponse`](../../doc/models/shippingstatus-response.md)

## Example Usage

```ts
const customerCode = 'DEVC';

const customerNumber = '11223344';

const referenceId = 'REF-12345';

const detail = false;

const language = LanguageEnum.NL;

const maxDays = '14';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await trackTraceController.getStatusInformationByCustomerReference(
  customerCode,
  customerNumber,
  referenceId,
  detail,
  language,
  maxDays
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
| 400 | Invalid request | [`ShippingstatusResponseError`](../../doc/models/shippingstatus-response-error.md) |
| 401 | Invalid apikey | [`ShippingstatusUnauthorizedError`](../../doc/models/shippingstatus-unauthorized-error.md) |
| 405 | Method not allowed | [`ShippingstatusMethodNotAllowedError`](../../doc/models/shippingstatus-method-not-allowed-error.md) |
| 429 | Too many requests | [`ShippingstatusTooManyRequestError`](../../doc/models/shippingstatus-too-many-request-error.md) |
| 500 | Internal server error | [`ShippingstatusResponseError`](../../doc/models/shippingstatus-response-error.md) |


# Returns the Signature of a Particular Shipment

Request example:

```
curl -X GET "https://api-sandbox.postnl.nl/shipment/v2/status/signature/3SDEVC172649258" \
 -H "Accept: application/json" \
 -H "apikey: APIKEY-HERE" 
```

```ts
async returnsTheSignatureOfAParticularShipment(
  barcode: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ShippingstatusResponseSignature>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `barcode` | [`string`](../../doc/models/string-enum.md) | Template, Required | Barcode of the shipment |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ShippingstatusResponseSignature`](../../doc/models/shippingstatus-response-signature.md)

## Example Usage

```ts
const barcode = '3SDEVC172649258';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await trackTraceController.returnsTheSignatureOfAParticularShipment(barcode);
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

## Example Response *(as JSON)*

```json
{
  "Signature": {
    "Barcode": "3SDEVC317858754",
    "SignatureDate": "2022-11-07T19:28:16",
    "SignatureImage": "iVBORw0KGgoAAAANSUhEUgAAAogAAAGTCAYAAACrs[TRUNCATED]"
  }
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid request | [`ShippingstatusResponseError`](../../doc/models/shippingstatus-response-error.md) |
| 401 | Invalid apikey | [`ShippingstatusUnauthorizedError`](../../doc/models/shippingstatus-unauthorized-error.md) |
| 405 | Method not allowed | [`ShippingstatusMethodNotAllowedError`](../../doc/models/shippingstatus-method-not-allowed-error.md) |
| 429 | Too many requests | [`ShippingstatusTooManyRequestError`](../../doc/models/shippingstatus-too-many-request-error.md) |
| 500 | Internal server error | [`ShippingstatusResponseError`](../../doc/models/shippingstatus-response-error.md) |


# Returns the Updated Statuses for a Particular Customer Number

Request example:

```
curl -X GET "https://api-sandbox.postnl.nl/shipment/v2/status/11223344/updatedshipments?period=2022-12-25T10:00:00&amp;period=2022-12-25T10:12:00" \
 -H "Accept: application/json" \
 -H "apikey: APIKEY-HERE" \
```

```ts
async returnsTheUpdatedStatusesForAParticularCustomerNumber(
  customernumber: string,
  period?: string[],
  requestOptions?: RequestOptions
): Promise<ApiResponse<ShippingstatusResponseUpdatedShipment[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customernumber` | [`string`](../../doc/models/string-enum.md) | Template, Required | Your customer number |
| `period` | [`string[] \| undefined`](../../doc/models/string-enum.md) | Query, Optional | Optional array which defines a specific period in which to return updated shipments. For optimal results, schedule calls at a frequency between 5-15 minutes and align the requested period accordingly to ensure complete coverage of past updates. Shorter periods yield improved response times. The API accommodates a maximum requested period of 2 hours, granting access to shipment data up to 48 hours in the past. Please use the following format: YYYY-MM-DDTHH:MM:SS and repeat this variable to define the period (e.g. /updatedshipments?period=2022-11-07T12:00:00.000&period=2022-11-07T12:05:00.000).<br>**Constraints**: *Maximum Items*: `2` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ShippingstatusResponseUpdatedShipment[]`](../../doc/models/shippingstatus-response-updated-shipment.md)

## Example Usage

```ts
const customernumber = '11223344';

const period: string[] = [
  '2022-11-07T12:00:00.000',
  '2022-11-07T12:05:00.000'
];

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await trackTraceController.returnsTheUpdatedStatusesForAParticularCustomerNumber(
  customernumber,
  period
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

## Example Response *(as JSON)*

```json
[
  {
    "Barcode": "3SDEVC2260332157",
    "CreationDate": "2022-11-07T00:00:00",
    "CustomerNumber": "11223344",
    "CustomerCode": "DEVC",
    "Status": {
      "Timestamp": "2022-11-08T02:17:49",
      "StatusCode": "5",
      "StatusDescription": "Zending gesorteerd",
      "PhaseCode": "2",
      "PhaseDescription": "Sortering"
    }
  },
  {
    "Barcode": "3SDEVC775533088",
    "CreationDate": "2022-11-07T00:00:00",
    "CustomerNumber": "11223344",
    "CustomerCode": "DEVC",
    "Status": {
      "Timestamp": "2022-11-08T04:15:00",
      "StatusCode": "13",
      "StatusDescription": "Voorgemeld: nog niet aangenomen",
      "PhaseCode": "1",
      "PhaseDescription": "Collectie"
    }
  },
  {
    "Barcode": "3SDEVC563372025",
    "CreationDate": "2022-11-07T00:00:00",
    "CustomerNumber": "11223344",
    "CustomerCode": "DEVC",
    "Status": {
      "Timestamp": "2022-11-08T04:15:00",
      "StatusCode": "13",
      "StatusDescription": "Voorgemeld: nog niet aangenomen",
      "PhaseCode": "1",
      "PhaseDescription": "Collectie"
    }
  },
  {
    "Barcode": "3SDEVC336510881",
    "CreationDate": "2022-11-08T00:00:00",
    "CustomerNumber": "11223344",
    "CustomerCode": "DEVC",
    "Status": {
      "Timestamp": "2022-11-08T01:01:28",
      "StatusCode": "1",
      "StatusDescription": "Zending voorgemeld",
      "PhaseCode": "1",
      "PhaseDescription": "Collectie"
    }
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Invalid request | [`ShippingstatusResponseError`](../../doc/models/shippingstatus-response-error.md) |
| 401 | Invalid apikey | [`ShippingstatusUnauthorizedError`](../../doc/models/shippingstatus-unauthorized-error.md) |
| 405 | Method not allowed | [`ShippingstatusMethodNotAllowedError`](../../doc/models/shippingstatus-method-not-allowed-error.md) |
| 429 | Too many requests | [`ShippingstatusTooManyRequestError`](../../doc/models/shippingstatus-too-many-request-error.md) |
| 500 | Internal server error | [`ShippingstatusResponseError`](../../doc/models/shippingstatus-response-error.md) |

