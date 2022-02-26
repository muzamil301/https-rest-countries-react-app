export interface CountryListingResponse {
  flags: any;
  name: string;
  population: number;
  region: string;
  capital: string;
  locale: string;
  translations: any;
}

export interface CountryDetailResponse {
  flag: string;
  name: string;
  nativeName: string;
  population: number;
  region: string;
  subRegion: string;
  capital: string;
  topLevelDoamin: string;
  currencies: any[];
  languages: string[];
  borders: string[];
  alpha2Code: string;
}
