/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Error1 {
  errorCode?: string;
  errorDescription?: string;
}

export const error1Schema: Schema<Error1> = object({
  errorCode: ['ErrorCode', optional(string())],
  errorDescription: ['ErrorDescription', optional(string())],
});
