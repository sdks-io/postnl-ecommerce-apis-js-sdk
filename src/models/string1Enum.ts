/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for String1Enum
 */
export enum String1Enum {
  Daytime = 'Daytime',
  Today = 'Today',
  Sameday = 'Sameday',
  Evening = 'Evening',
  Morning = 'Morning',
  Noon = 'Noon',
  Sunday = 'Sunday',
  Afternoon = 'Afternoon',
}

/**
 * Schema for String1Enum
 */
export const string1EnumSchema: Schema<String1Enum> = stringEnum(String1Enum);