# Barcode

### Summary

* Reason to Call: Generate a barcode for your parcels.
* Input: Customer code and customer number and some specifications of the required barcode.
* Output: An unique identifier to use for creating shipments and to track and trace the status of the parcels.

Please note that you can use the all-in-one [Shipping API](#tag/Shipment) as well. This API combines the functionality of the Barcode, Labelling, Confirmation and Easy Return API. With this API you generate unique barcodes at the same time you create a label and so cutting down the number of API requests.

### Guidelines

At the <a href="https://developer.postnl.nl/" target="_blank" rel="noopener noreferrer">Developer Portal</a> you can find information about the use and functionality of the API. It is strongly recommended that you read this carefully before starting the implementation.

<button type="button">
  <a href="https://developer.postnl.nl/browse-apis/send-and-track/barcode-webservice/" target="_blank" rel="noopener noreferrer">Documentation</a>
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
      <td>1_0</td>
      <td>Oct 01, 2012</td>
      <td>Not supported</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>1_1</td>
      <td>Oct 28, 2014</td>
      <td>Current version</td>
      <td>Different namespaces</td>
      <td>Yes</td>
      <td>REST and SOAP</td>
    </tr>
  </tbody>
</table>


```ts
const barcodeController = new BarcodeController(client);
```

## Class Name

`BarcodeController`


# Generate a Unique Barcode

Request example:

```
curl -X GET "https://api-sandbox.postnl.nl/shipment/v1_1/barcode?CustomerCode=DEVC&amp;CustomerNumber=11223344&amp;Type=3S&amp;Serie=000000000-999999999&amp;Range=NL" \
 -H "Accept: application/json" \
 -H "apikey: APIKEY-HERE" 
```

```ts
async generateAUniqueBarcode(
  customerCode: string,
  customerNumber: string,
  type: Type1Enum,
  serie?: string,
  range?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<BarcodeResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `customerCode` | [`string`](../../doc/models/string-enum.md) | Query, Required | The customer code for which you want a barcode to be generated |
| `customerNumber` | [`string`](../../doc/models/string-enum.md) | Query, Required | The customer code for which you want a barcode to be generated |
| `type` | [`Type1Enum`](../../doc/models/type-1-enum.md) | Query, Required | The barcode type that you want to be generated |
| `serie` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | Barcode serie in the format '###000000-###000000', for example 100000-20000. The range must consist of a minimal difference of 100.000. It is allowed to add extra leading zeros at the beginning of the serie. See [Guidelines](https://developer.postnl.nl/browse-apis/send-and-track/barcode-webservice/) for more information.<br>**Constraints**: *Minimum Length*: `6`, *Maximum Length*: `9` |
| `range` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | Only used for International Mail and Packet products (PEPS) shipments (with type LA, RI, UE). Identifying the issuing postal administration's country (NL in this case). |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`BarcodeResponse`](../../doc/models/barcode-response.md)

## Example Usage

```ts
const customerCode = 'DEVC';

const customerNumber = '11223344';

const type = Type1Enum.Enum3S;

const range = 'NL';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await barcodeController.generateAUniqueBarcode(
  customerCode,
  customerNumber,
  type,
  undefined,
  range
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
| 400 | Invalid request | [`BarcodeResponseInvalidError`](../../doc/models/barcode-response-invalid-error.md) |
| 401 | Unauthorized | [`BarcodeResponseError`](../../doc/models/barcode-response-error.md) |
| 405 | Method not allowed | [`BarcodeMethodNotAllowedError`](../../doc/models/barcode-method-not-allowed-error.md) |
| 429 | Too many requests | [`BarcodeTooManyRequestError`](../../doc/models/barcode-too-many-request-error.md) |
| 500 | Internal server error | [`BarcodeResponseError`](../../doc/models/barcode-response-error.md) |

