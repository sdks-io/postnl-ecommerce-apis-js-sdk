/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema } from '../schema';
import { Timeframe1, timeframe1Schema } from './timeframe1';

export interface Timeframes {
  /** A calculated delivery timeframe */
  timeframe?: Timeframe1[];
}

export const timeframesSchema: Schema<Timeframes> = object({
  timeframe: ['Timeframe', optional(array(lazy(() => timeframe1Schema)))],
});
