/**
 * OpenAPI definition
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: v0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

export interface CountryResponse {
  id?: number;
  name?: string;
  nativeName?: string;
  iso3?: string;
  iso2?: string;
  numericCode?: number;
  phoneCode?: string;
  capitalName?: string;
  currency?: string;
  currencyName?: string;
  currencySymbol?: string;
  topLevelDomain?: string;
  region?: string;
  regionId?: number;
  subregion?: string;
  subregionId?: number;
  nationality?: string;
  timezones?: string;
  latitude?: number;
  longitude?: number;
  emoji?: string;
  emojiu?: string;
}