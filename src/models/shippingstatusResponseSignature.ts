/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { lazy, object, optional, Schema } from '../schema';
import { Signature, signatureSchema } from './signature';
import { Warnings, warningsSchema } from './warnings';

export interface ShippingstatusResponseSignature {
  signature?: Signature;
  warnings?: Warnings;
}

export const shippingstatusResponseSignatureSchema: Schema<ShippingstatusResponseSignature> = object(
  {
    signature: ['Signature', optional(lazy(() => signatureSchema))],
    warnings: ['Warnings', optional(lazy(() => warningsSchema))],
  }
);
