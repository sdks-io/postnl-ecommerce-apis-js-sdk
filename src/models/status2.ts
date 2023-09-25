/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

/** The status update. See [Status codes](#tag/TandT-status-codes/Status-codes) for possible values. */
export interface Status2 {
  /** The timestamp of the update */
  timestamp?: string;
  /** The status code */
  statusCode?: string;
  /** The status description */
  statusDescription?: string;
  /** The phase code */
  phaseCode?: string;
  /** The phase description */
  phaseDescription?: string;
}

export const status2Schema: Schema<Status2> = object({
  timestamp: ['Timestamp', optional(string())],
  statusCode: ['StatusCode', optional(string())],
  statusDescription: ['StatusDescription', optional(string())],
  phaseCode: ['PhaseCode', optional(string())],
  phaseDescription: ['PhaseDescription', optional(string())],
});
