/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';

/**
 * Creates an instance of PostCIFCheckoutServiceUnauthorized
 */
interface PostCIFCheckoutServiceUnauthorized {
  message?: string;
  http_status_code?: number;
}

export class PostCIFCheckoutServiceUnauthorizedError extends ApiError<PostCIFCheckoutServiceUnauthorized> {}
