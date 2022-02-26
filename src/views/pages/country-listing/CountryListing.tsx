import { useEffect, useState } from "react";
import styled from "styled-components";
import SearchBar from "./../../components/SearchBar";
import Select from "./../../components/Select";
import CountryCard from "./../../components/CountryCard";
import {
  getAllCountriesData,
  getCountriesByRegion,
} from "../../../utils/adapters/CountriesAdapter";
import Spinner from "./../../components/Spinner";
import { CountryListingResponse } from "../../../models/CountriesResponse";

function CountryListing() {
  const [countries, setCountries] = useState<[CountryListingResponse]>();
  const [loading, setLoading] = useState(true);
  const [searchedStr, setSearchedStr] = useState<any>("");
  const [region, setRegion] = useState<string>("");
  const [translations, setTranslations] = useState<any>([]);
  const [currentLocale, setCurrentLocale] = useState("");
  const regions = ["All", "Africa", "Asia", "Europe", "Oceania"];

  useEffect(() => {
    getAllCountriesData().then((res: any) => {
      setLoading(false);
      setCountries(res);
      let translationObj = res[0].translations;
      setTranslations(Object.keys(translationObj));
    });
  }, []);

  useEffect(() => {
    region !== "" && setLoading(true);

    getCountriesByRegion(region).then((res: any) => {
      setCountries(res);
      setLoading(false);
    });
  }, [region]);

  useEffect(() => {
    console.log("currentLocale", currentLocale);
  }, [currentLocale]);

  return (
    <CountryListingWrapper>
      <div className="actionBar">
        <SearchBar
          setValue={setSearchedStr}
          placeholder="Search for a country..."
        />
        {translations && (
          <Select
            placeholder="Localization"
            options={translations}
            setValue={setCurrentLocale}
          />
        )}

        <Select
          placeholder="Filter By Region"
          options={regions}
          setValue={setRegion}
        />
      </div>
      <div className="countryListingWrapper">
        {loading ? (
          <Spinner />
        ) : countries ? (
          countries &&
          countries
            .filter((item: CountryListingResponse) => {
              if (searchedStr === "") {
                return countries;
              }
              return item.name
                .toLowerCase()
                .startsWith(searchedStr.toLowerCase());
            })
            .map((item: CountryListingResponse) => (
              <CountryCard data={item} key={item.name} locale={currentLocale} />
            ))
        ) : (
          <>No records found</>
        )}
      </div>
    </CountryListingWrapper>
  );
}

const CountryListingWrapper = styled.div`
  margin: 48px 0;
  .actionBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 48px;
  }
  .countryListingWrapper {
    display: flex;
    flex-wrap: wrap;
    gap: 56px;
  }

  @media all and (max-width: 768px) {
    .actionBar {
      flex-direction: column;
      gap: 30px;
      align-items: start;
    }
    .countryListingWrapper {
      gap: 50px;
    }
  }
`;

export default CountryListing;
