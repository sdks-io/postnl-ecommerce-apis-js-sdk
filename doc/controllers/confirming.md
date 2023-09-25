# Confirming

### Summary

* Reason to Call: Create and send a confirmation of the parcels to the PostNL system.
* Input: Information about the shipment.
* Output: Confirm shipment information.

Please note that you can use the all-in-one [Shipping API](#tag/Shipment) as well. This API combines the functionality of the Barcode, Labelling, Confirmation and Easy Return API. With this API you generate unique barcodes at the same time you create a label and so cutting down the number of API requests.

When using the [Shipping](#tag/Shipment) or Labelling API (With the Confirm boolean true in the request) the Confirming service does no longer need to be integrated in your system.

### Guidelines

At the <a href="https://developer.postnl.nl/" target="_blank" rel="noopener noreferrer">Developer Portal</a> you can find information about the use and functionality of the API. It is strongly recommended that you read this carefully before starting the implementation.

<button type="button">
  <a href="https://developer.postnl.nl/browse-apis/send-and-track/confirming-webservice/" target="_blank" rel="noopener noreferrer">Documentation</a>
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
      <td>1_2</td>
      <td>Dec 31, 2012</td>
      <td>Not supported</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>1_3</td>
      <td>Nov 8, 2013</td>
      <td>Not supported</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>1_4</td>
      <td>Feb 27, 2014</td>
      <td>Not supported</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>1_5</td>
      <td>Aug 14, 2014</td>
      <td>Not supported</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>1_6</td>
      <td>Nov 14, 2014</td>
      <td>Not supported</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>1_7</td>
      <td>Jan 12, 2015</td>
      <td>Not supported</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>1_8</td>
      <td>Apr 24, 2015</td>
      <td>Not supported</td>
      <td>-</td>
      <td>-</td>
      <td>-</td>
    </tr>
    <tr>
      <td>1_9</td>
      <td>Aug 14, 2015</td>
      <td>Supported</td>
      <td>Maintenance release</td>
      <td>No</td>
      <td>SOAP</td>
    </tr>
    <tr>
      <td>1_10</td>
      <td>July 15, 2017</td>
      <td>Supported</td>
      <td>See below</td>
      <td>Yes</td>
      <td>REST and SOAP</td>
    </tr>
    <tr>
      <td>v2</td>
      <td>Jan 25, 2019</td>
      <td>Supported</td>
      <td>See below</td>
      <td>Yes</td>
      <td>REST and SOAP</td>
    </tr>
  </tbody>
</table>
### Release notes

#### v1.10

* PostNL has implemented a commercial route to China. In order to do this, the following fields have been added to the interface:

Shipment.Customs.Content.Content.EAN  
Shipment Customs.Content.Content.ProductURL

**NOTE: THIS PRODUCT NO LONGER EXISTS**

The Shipment.Customs.Content element can occur up to 10 times instead of 5.

* The delivery option Delivery on demand (MyTime) has been introduced and the following fields have been added to the interface:

DeliveryTimestampStart  
DeliveryTimestampEnd

**NOTE: THIS PRODUCT NO LONGER EXISTS**

#### v2

* The following fields have been added to the interface for International shipments:

Shipment.Customs.TrustedShipperID  
Shipment.Customs.ImporterReferenceCode  
Shipment.Customs.TransactionCode  
Shipment.Customs.TransactionDescription

```ts
const confirmingController = new ConfirmingController(client);
```

## Class Name

`ConfirmingController`


# Confirm a Shipment to Post NL

Confirm a shipment to PostNL

```ts
async confirmAShipmentToPostNL(
  body: ConfirmingRequest,
  requestOptions?: RequestOptions
): Promise<ApiResponse<ConfirmingResponse>>
```

## Parameters

| Parameter | Type | Tags | Description |
|  --- | --- | --- | --- |
| `body` | [`ConfirmingRequest`](../../doc/models/confirming-request.md) | Body, Required | - |
| `requestOptions` | `RequestOptions \| undefined` | Optional | Pass additional request options. |

## Response Type

[`ConfirmingResponse`](../../doc/models/confirming-response.md)

## Example Usage

```ts
const body: ConfirmingRequest = {
  customer: {
    customerCode: 'DEVC',
    customerNumber: '11223344',
    address: {
      addressType: '02',
      city: 'Den Haag',
      countrycode: 'NL',
      companyName: 'PostNL',
      houseNr: '3',
      street: 'Waldorpstraat',
      zipcode: '2521CA',
    },
    collectionLocation: '123456',
    contactPerson: 'Janssen',
    email: 'email@company.com',
    name: 'Janssen',
  },
  message: {
    messageID: '1',
    messageTimeStamp: '08-09-2022 12:00:00',
  },
  shipments: [
    {
      addresses: [
        {
          addressType: '01',
          countrycode: 'NL',
          city: 'Utrecht',
          firstName: 'Peter',
          houseNr: '9',
          houseNrExt: 'a bis',
          name: 'de Ruiter',
          street: 'Bilderdijkstraat',
          zipcode: '3532VA',
        }
      ],
      barcode: '3SDEVC748859096',
      dimension: {
        weight: 2000,
      },
      productCodeDelivery: '3085',
      contacts: [
        {
          contactType: '01',
          email: 'receiver@email.com',
          sMSNr: '+31612345678',
          telNr: '+31301234567',
        }
      ],
    }
  ],
};

try {
  // @ts-expect-error: unused variables
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { result, ...httpResponse } = await confirmingController.confirmAShipmentToPostNL(body);
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
  "ResponseShipments": [
    {
      "Errors": [],
      "Warnings": [
        {
          "code": "1280103",
          "description": "Address is unknown"
        }
      ],
      "Barcode": "3SDEVC281677095"
    }
  ]
}
```

## Errors

| HTTP Status Code | Error Description | Exception Class |
|  --- | --- | --- |
| 400 | Error payload | [`ConfirmingResponseError`](../../doc/models/confirming-response-error.md) |
| 401 | Invalid apikey | [`ConfirmingUnauthorizedError`](../../doc/models/confirming-unauthorized-error.md) |
| 405 | Method not allowed | [`ConfirmingMethodNotAllowedError`](../../doc/models/confirming-method-not-allowed-error.md) |
| 429 | Too many requests | [`ConfirmingTooManyRequestError`](../../doc/models/confirming-too-many-request-error.md) |
| 500 | Internal server error | [`ConfirmingResponseError1Error`](../../doc/models/confirming-response-error-1-error.md) |

