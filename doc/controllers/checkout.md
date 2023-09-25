# Checkout

### Summary

* Reason to Call: Receive information regarding delivery options.
* Input: Details of dates, address of the customer, order date and delivery options.
* Output: Timeframes and pickup locations.

Combines the functionality of the DeliveryDate, Timeframe and Location API.

### Guidelines

At the <a href="https://developer.postnl.nl/" target="_blank" rel="noopener noreferrer">Developer Portal</a> you can find information about the use and functionality of the API. It is strongly recommended that you read this carefully before starting the implementation.

<button type="button">
  <a href="https://developer.postnl.nl/browse-apis/checkout/checkout-api/" target="_blank" rel="noopener noreferrer">Documentation</a>
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
      <td>v1</td>
      <td>July 05, 2019</td>
      <td>Current version</td>
      <td>First version</td>
      <td>-</td>
      <td>REST</td>
    </tr>
  </tbody>
</table>


```ts
const checkoutController = new CheckoutController(client);
```

## Class Name

`CheckoutController`


# Checkout

Checkout

```ts
async checkout(
  body: CheckoutRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<CheckoutResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`CheckoutRequest`](../../doc/models/checkout-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`CheckoutResponse`](../../doc/models/checkout-response.md)

## Example Usage

```ts
const body: CheckoutRequest = {
  orderDate: '24-02-2021 12:00:00',
  cutOffTimes: [
    {
      day: DayEnum.Enum00,
      available: true,
      type: TypeEnum.Regular,
      time: '20:00:00',
    },
    {
      day: DayEnum.Enum00,
      available: true,
      type: TypeEnum.Today,
      time: '12:00:00',
    }
  ],
  options: [
    OptionEnum.Daytime,
    OptionEnum.Evening,
    OptionEnum.Today,
    OptionEnum.Sunday,
    OptionEnum.Pickup
  ],
  locations: 2,
  days: 3,
  addresses: [
    {
      addressType: AddressTypeEnum.Enum01,
      houseNr: 74,
      zipcode: '3571ZZ',
      countrycode: CountrycodeEnum.NL,
      street: 'Molengraaffplantsoen',
      city: 'Utrecht',
    }
  ],
  shippingDuration: 1,
  holidaySorting: true,
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await checkoutController.checkout(body);
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
| 400 | Invalid request | [`CheckoutResponseInvalidError`](../../doc/models/checkout-response-invalid-error.md) |
| 401 | Invalid apikey | [`PostCIFCheckoutServiceUnauthorizedError`](../../doc/models/post-cif-checkout-service-unauthorized-error.md) |
| 405 | Method not allowed | [`PostCIFCheckoutServiceMethodNotAllowedError`](../../doc/models/post-cif-checkout-service-method-not-allowed-error.md) |
| 429 | Too many requests | [`PostCIFCheckoutServiceTooManyRequestError`](../../doc/models/post-cif-checkout-service-too-many-request-error.md) |
| 500 | Internal server error | [`CheckoutResponseError`](../../doc/models/checkout-response-error.md) |

