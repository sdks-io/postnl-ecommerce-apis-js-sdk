/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { Schema, stringEnum } from '../schema';

/**
 * Enum for Type1Enum
 */
export enum Type1Enum {
  Enum2S = '2S',
  Enum3S = '3S',
  CC = 'CC',
  CP = 'CP',
  CD = 'CD',
  CF = 'CF',
  LA = 'LA',
  RI = 'RI',
  UE = 'UE',
}

/**
 * Schema for Type1Enum
 */
export const type1EnumSchema: Schema<Type1Enum> = stringEnum(Type1Enum);