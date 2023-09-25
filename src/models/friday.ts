/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Friday {
  from?: string;
  to?: string;
}

export const fridaySchema: Schema<Friday> = object({
  from: ['From', optional(string())],
  to: ['To', optional(string())],
});
