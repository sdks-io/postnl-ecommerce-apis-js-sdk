/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { Error7 } from '../models/error7';

/**
 * Creates an instance of LabellingResponseInvalid
 */
interface LabellingResponseInvalid {
  /** A list of errors returned from the webservice. See the [Error codes](#tag/Error-codes) for possible values. */
  Errors?: Error7[];
}

export class LabellingResponseInvalidError extends ApiError<LabellingResponseInvalid> {}