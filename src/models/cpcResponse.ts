/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, number, object, optional, Schema, string } from '../schema';

export interface CpcResponse {
  /** City of requested address */
  city?: string;
  /** Postalcode of requested address */
  postalCode?: string;
  /** Street of requested address */
  streetName?: string;
  /** Housenumber of requested address */
  houseNumber?: number;
  /** Housenumber addition of requested address if applicable */
  houseNumberAddition?: string;
  /** Full formatted address according to PostNL standard (returns each line as a separate string) */
  formattedAddress?: string[];
}

export const cpcResponseSchema: Schema<CpcResponse> = object({
  city: ['city', optional(string())],
  postalCode: ['postalCode', optional(string())],
  streetName: ['streetName', optional(string())],
  houseNumber: ['houseNumber', optional(number())],
  houseNumberAddition: ['houseNumberAddition', optional(string())],
  formattedAddress: ['formattedAddress', optional(array(string()))],
});