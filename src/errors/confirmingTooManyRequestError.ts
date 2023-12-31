/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of ConfirmingTooManyRequest
 */
interface ConfirmingTooManyRequest {
  message?: string;
  http_status_code?: number;
}

export class ConfirmingTooManyRequestError extends ApiError<ConfirmingTooManyRequest> {}
