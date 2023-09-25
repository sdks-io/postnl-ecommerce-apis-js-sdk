/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema } from '../schema';
import { String1Enum, string1EnumSchema } from './string1Enum';

/** The option for which no timeframe was calculated for a specific date */
export interface Options3 {
  string?: String1Enum;
}

export const options3Schema: Schema<Options3> = object({
  string: ['string', optional(string1EnumSchema)],
});