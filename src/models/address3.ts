/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Address3 {
  /** Address 02 is mandatory. It can either be placed in the Customer segment or in the Shipment segment. Note that if you put it in the Shipment segment, it should go into all Shipment segments. */
  addressType: string;
  /** Area of the address */
  area?: string;
  /** Building name of the address */
  buildingname?: string;
  /** City of the address */
  city: string;
  /** This field has a dependency with the field Name. One of both fields must be filled mandatory; using both fields is also allowed. Mandatory when AddressType is 09. */
  companyName?: string;
  /** The ISO2 country codes */
  countrycode: string;
  /** Send to specific department of a company */
  department?: string;
  /** Door code of address. Mandatory for some international shipments. */
  doorcode?: string;
  /** Remark: please add FirstName and Name (lastname) of the receiver to improve the parcel tracking experience of your customer. */
  firstName?: string;
  /** Send to specific floor of a company */
  floor?: string;
  /** Mandatory for shipments to Benelux. Max. length is 5 characters (only for Benelux addresses). For Benelux addresses,this field should always be numeric. */
  houseNr?: string;
  /** House number extension */
  houseNrExt?: string;
  /** Last name of person. This field has a dependency with the field CompanyName. One of both fields must be filled mandatory; using both fields is also allowed. Remark: please add FirstName and Name (lastname) of the receiver to improve the parcel tracking experience of your customer. */
  name?: string;
  /** Region of the address */
  region?: string;
  /** This field has a dependency with the field StreetHouseNrExt. One of both fields must be filled mandatory; using both fields simultaneously is discouraged. */
  street?: string;
  /** Combination of Street, HouseNr and HouseNrExt. Please see [Guidelines](https://developer.postnl.nl/browse-apis/send-and-track/labelling-webservice/) for the explanation. */
  streetHouseNrExt?: string;
  /** Zipcode of the address. Mandatory for shipments to Benelux. Max length (NL) 6 characters,(BE;LU) 4 numeric characters */
  zipcode?: string;
}

export const address3Schema: Schema<Address3> = object({
  addressType: ['AddressType', string()],
  area: ['Area', optional(string())],
  buildingname: ['Buildingname', optional(string())],
  city: ['City', string()],
  companyName: ['CompanyName', optional(string())],
  countrycode: ['Countrycode', string()],
  department: ['Department', optional(string())],
  doorcode: ['Doorcode', optional(string())],
  firstName: ['FirstName', optional(string())],
  floor: ['Floor', optional(string())],
  houseNr: ['HouseNr', optional(string())],
  houseNrExt: ['HouseNrExt', optional(string())],
  name: ['Name', optional(string())],
  region: ['Region', optional(string())],
  street: ['Street', optional(string())],
  streetHouseNrExt: ['StreetHouseNrExt', optional(string())],
  zipcode: ['Zipcode', optional(string())],
});