/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of LabellingUnauthorized
 */
interface LabellingUnauthorized {
  message?: string;
  http_status_code?: number;
}

export class LabellingUnauthorizedError extends ApiError<LabellingUnauthorized> {}
