import { lazy } from "react";

// country imports
const CountryListing = lazy(
  () => import("./../views/pages/country-listing/CountryListing")
);
const CountryDetail = lazy(
  () => import("./../views/pages/country-detail/CountryDetail")
);

const RouteImports = {
  CountryListing,
  CountryDetail,
};

export default RouteImports;
