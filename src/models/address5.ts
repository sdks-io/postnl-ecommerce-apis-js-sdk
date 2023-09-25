/**
 * PostNL Ecommerce APIsLib
 *
 * This file was automatically generated by APIMATIC v3.0 ( https://www.apimatic.io ).
 */

import { object, optional, Schema, string } from '../schema';

export interface Address5 {
  /** The first name */
  firstName?: string;
  /** The last name */
  lastName?: string;
  /** The company name */
  companyName?: string;
  /** The department name */
  departmentName?: string;
  /** The ISO2 country code */
  countryCode?: string;
  /** The zipcode */
  zipcode?: string;
  /** The region name */
  region?: string;
  /** The district name */
  district?: string;
  /** The city name */
  city?: string;
  /** The street name */
  street?: string;
  /** The house number */
  houseNumber?: string;
  /** The house number suffix */
  houseNumberSuffix?: string;
  /** The building name */
  building?: string;
  /** The floor of the building */
  floor?: string;
  /** An additional remark */
  remark?: string;
}

export const address5Schema: Schema<Address5> = object({
  firstName: ['FirstName', optional(string())],
  lastName: ['LastName', optional(string())],
  companyName: ['CompanyName', optional(string())],
  departmentName: ['DepartmentName', optional(string())],
  countryCode: ['CountryCode', optional(string())],
  zipcode: ['Zipcode', optional(string())],
  region: ['Region', optional(string())],
  district: ['District', optional(string())],
  city: ['City', optional(string())],
  street: ['Street', optional(string())],
  houseNumber: ['HouseNumber', optional(string())],
  houseNumberSuffix: ['HouseNumberSuffix', optional(string())],
  building: ['Building', optional(string())],
  floor: ['Floor', optional(string())],
  remark: ['Remark', optional(string())],
});