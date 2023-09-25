/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { array, lazy, object, optional, Schema, string } from '../schema';
import { Timeframe, timeframeSchema } from './timeframe';

export interface DeliveryOption {
  /** The possible delivery date */
  deliveryDate?: string;
  /** Array of timeframes */
  timeframe?: Timeframe[];
}

export const deliveryOptionSchema: Schema<DeliveryOption> = object({
  deliveryDate: ['DeliveryDate', optional(string())],
  timeframe: ['Timeframe', optional(array(lazy(() => timeframeSchema)))],
});
