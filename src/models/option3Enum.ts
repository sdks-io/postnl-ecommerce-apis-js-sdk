/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Option3Enum
 */
export enum Option3Enum {
  Daytime = 'Daytime',
  Evening = 'Evening',
  Morning = 'Morning',
  Noon = 'Noon',
  Sunday = 'Sunday',
  Today = 'Today',
  Afternoon = 'Afternoon',
}

/**
 * Schema for Option3Enum
 */
export const option3EnumSchema: Schema<Option3Enum> = stringEnum(Option3Enum);