/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema, string } from '../schema';
import { Options3, options3Schema } from './options3';
import { Sustainability4, sustainability4Schema } from './sustainability4';

export interface ReasonNoTimeframe {
  /** The reason code */
  code?: string;
  /** The date associated with the reason no timeframe was calculated */
  date?: string;
  /** The description associated with the reason no timeframe was calculated */
  description?: string;
  /** The option for which no timeframe was calculated for a specific date */
  options?: Options3;
  /** Sustainability score */
  sustainability?: Sustainability4;
}

export const reasonNoTimeframeSchema: Schema<ReasonNoTimeframe> = object({
  code: ['Code', optional(string())],
  date: ['Date', optional(string())],
  description: ['Description', optional(string())],
  options: ['Options', optional(lazy(() => options3Schema))],
  sustainability: [
    'Sustainability',
    optional(lazy(() => sustainability4Schema)),
  ],
});