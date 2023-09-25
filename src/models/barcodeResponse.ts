/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface BarcodeResponse {
  barcode?: string;
}

export const barcodeResponseSchema: Schema<BarcodeResponse> = object({
  barcode: ['Barcode', optional(string())],
});