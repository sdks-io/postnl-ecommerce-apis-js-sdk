/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { Fault } from '../models/fault';

/**
 * Creates an instance of TimeframeResponse
 */
interface TimeframeResponse {
  fault?: Fault;
}

export class TimeframeResponseError extends ApiError<TimeframeResponse> {}