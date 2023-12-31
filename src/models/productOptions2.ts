/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, Schema, string } from '../schema';

export interface ProductOptions2 {
  /** The characteristic of the ProductOption. Mandatory for some products, please see the [Products page](#tag/Product-codes) */
  characteristic: string;
  /** The product option code for this ProductOption. Mandatory for some products, please see the [Products page](#tag/Product-codes) */
  option: string;
}

export const productOptions2Schema: Schema<ProductOptions2> = object({
  characteristic: ['Characteristic', string()],
  option: ['Option', string()],
});
