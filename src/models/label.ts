/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Label {
  /** Base64 encoded label content */
  content?: string;
  /** Type of the label. See possible [Label types](#tag/Reference-codes/Label-types) */
  labeltype?: string;
  /** Content type of the label, e.g. zebra of pdf. */
  outputType?: string;
}

export const labelSchema: Schema<Label> = object({
  content: ['Content', optional(string())],
  labeltype: ['Labeltype', optional(string())],
  outputType: ['OutputType', optional(string())],
});
