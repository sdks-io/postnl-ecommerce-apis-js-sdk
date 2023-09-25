# Postalcodecheck

```ts
const postalcodecheckController = new PostalcodecheckController(client);
```

## Class Name

`PostalcodecheckController`


# Checkout Postalcode Check

Please note that this API is not available on the sandbox environment.

Request example:

```
curl -X GET "https://api.postnl.nl/shipment/checkout/v1/postalcodecheck?postalcode=3571ZZ&amp;housenumber=74&amp;housenumberaddition=bis" \
 -H "Accept: application/json" \
 -H "apikey: APIKEY-HERE" 
```

```ts
async checkoutPostalcodeCheck(
  postalcode: string,
  housenumber: number,
  housenumberaddition?: string,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CpcResponse[]>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `postalcode` | [`string`](../../doc/models/string-enum.md) | Query, Required | **Constraints**: *Minimum Length*: `6`, *Maximum Length*: `6` |
| `housenumber` | `number` | Query, Required | - |
| `housenumberaddition` | [`string \| undefined`](../../doc/models/string-enum.md) | Query, Optional | **Constraints**: *Maximum Length*: `6` |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CpcResponse[]`](../../doc/models/cpc-response.md)

## Example Usage

```ts
const postalcode = '3571ZZ';

const housenumber = 74;

const housenumberaddition = 'bis';

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await postalcodeCheckController.checkoutPostalcodeCheck(
  postalcode,
  housenumber,
  housenumberaddition
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
    "city": "UTRECHT",
    "postalCode": "3571ZZ",
    "streetName": "Molengraaffplantsoen",
    "houseNumber": 74,
    "houseNumberAddition": "bis",
    "formattedAddress": [
      "Molengraaffplantsoen 74 bis",
      "3571ZZ UTRECHT"
    ]
  }
]
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Bad request | [`CpcResponseInvalidError`](../../doc/models/cpc-response-invalid-error.md) |
| 401 | Invalid apikey | [`CheckoutPostalCodecheckUnauthorizedError`](../../doc/models/checkout-postal-codecheck-unauthorized-error.md) |
| 405 | Method not allowed | [`CheckoutPostalCodecheckMethodNotAllowedError`](../../doc/models/checkout-postal-codecheck-method-not-allowed-error.md) |
| 429 | Too many requests | [`CheckoutPostalCodecheckTooManyRequestError`](../../doc/models/checkout-postal-codecheck-too-many-request-error.md) |
| 500 | Internal server error | [`CpcResponseError`](../../doc/models/cpc-response-error.md) |

