/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { number, object, optional, Schema, string } from '../schema';
import { AddressTypeEnum, addressTypeEnumSchema } from './addressTypeEnum';
import { CountrycodeEnum, countrycodeEnumSchema } from './countrycodeEnum';

export interface Address {
  /** Address type. 01 is for the receiver address, 02 is for the sender address. */
  addressType: AddressTypeEnum;
  /** Street name; for Belgian addresses, it is strongly recommended to fill in the  street value */
  street?: string;
  /** The house number of the delivery address */
  houseNr: number;
  /** House number extension */
  houseNrExt?: string;
  /** Zipcode of the address */
  zipcode: string;
  /** City of the address */
  city?: string;
  /** ISO2 country code. Limited to NL and BE. */
  countrycode: CountrycodeEnum;
}

export const addressSchema: Schema<Address> = object({
  addressType: ['AddressType', addressTypeEnumSchema],
  street: ['Street', optional(string())],
  houseNr: ['HouseNr', number()],
  houseNrExt: ['HouseNrExt', optional(string())],
  zipcode: ['Zipcode', string()],
  city: ['City', optional(string())],
  countrycode: ['Countrycode', countrycodeEnumSchema],
});