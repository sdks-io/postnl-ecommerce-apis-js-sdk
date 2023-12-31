/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { ApiError } from '../core';
import { Fault } from '../models/fault';

/**
 * Creates an instance of CpcResponse
 */
interface CpcResponse {
  fault?: Fault;
}

export class CpcResponseError extends ApiError<CpcResponse> {}
