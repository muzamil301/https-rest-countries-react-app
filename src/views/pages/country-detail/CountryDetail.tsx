import { useEffect, useState } from "react";
import styled from "styled-components";
import Spinner from "./../../components/Spinner";
import Button, { SimpleAnchorButton } from "./../../components/Buttons";
import { CountryDetailResponse } from "../../../models/CountriesResponse";
import { useParams } from "react-router-dom";
import { ReactComponent as BackIcon } from "../../../assets/icons/arrow-back-outline.svg";
import {
  getCountryDetailData,
  getBorderCountryByCode,
} from "src/utils/adapters/CountriesAdapter";

function CountryDetail() {
  const { name } = useParams();
  const [loading, setLoading] = useState(true);
  const [countryData, setCountryData] = useState<CountryDetailResponse>();

  useEffect(() => {
    getCountryDetailData(name as string).then((res) => {
      setCountryData(res.data[0]);
      setLoading(false);
    });
  }, [name]);

  const loadBorderCountry = (code: string) => {
    setLoading(true);
    getBorderCountryByCode(code)
      .then((res) => {
        setCountryData(res.data[0]);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  return (
    <StyledDetailWrapper>
      <div className="actionBar">
        <Button label="Back" to={"/"} icon={<BackIcon />} />
      </div>
      {loading ? (
        <Spinner />
      ) : countryData ? (
        <div className="detailsBox">
          <div className="flag">
            <img
              src={
                countryData.flag
                  ? countryData.flag
                  : "/assets/images/flag-placeholder.jpg"
              }
              alt={countryData.name}
            />
          </div>
          <div className="content">
            <h2 className="heading">{countryData.name}</h2>
            <div className="attributes">
              <div className="left-col">
                <div>
                  <span className="label">Native Name:</span>
                  <span className="value">{countryData.nativeName}</span>
                </div>
                <div>
                  <span className="label">Population:</span>
                  <span className="value">{countryData.population}</span>
                </div>
                <div>
                  <span className="label">Region:</span>
                  <span className="value">{countryData.region}</span>
                </div>
                <div>
                  <span className="label">Sub Region:</span>
                  <span className="value">
                    {countryData.subRegion ? countryData.subRegion : "N/A"}
                  </span>
                </div>
                <div>
                  <span className="label">Capital:</span>
                  <span className="value">{countryData.capital}</span>
                </div>
              </div>
              <div className="right-col">
                <div>
                  <span className="label">Top Level Domain:</span>
                  <span className="value"></span>
                </div>
                <div>
                  <span className="label">Currencies:</span>
                  <span className="value">
                    {countryData?.currencies?.length
                      ? countryData.currencies[0].name
                      : "N/A"}
                  </span>
                </div>
                <div>
                  <span className="label">Languages:</span>
                  <span className="value">
                    {countryData.languages.length > 0
                      ? countryData.languages.map(
                          (item: any) => `${item.name}, `
                        )
                      : "N/A"}
                  </span>
                </div>
              </div>
            </div>
            <div className="borderCountries">
              <span className="label">Border Countries:</span>
              <div className="countryTags">
                {countryData["borders"] && countryData["borders"].length ? (
                  countryData?.borders?.map((item: string) => (
                    <SimpleAnchorButton
                      className="sm"
                      label={item}
                      key={item}
                      onClick={() => loadBorderCountry(item)}
                    />
                  ))
                ) : (
                  <p>N/A</p>
                )}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div>No Data Found</div>
      )}
    </StyledDetailWrapper>
  );
}

const StyledDetailWrapper = styled.div`
  padding: 80px 0;
  .actionBar {
    margin-bottom: 80px;
  }
  .detailsBox {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 118px;
    .flag {
      max-width: 563px;
      img {
        width: 100%;
      }
    }
    .content {
      max-width: 606px;
      .heading {
        font-size: 34px;
        margin-bottom: 36px;
        color: ${(props) => props.theme.colors.text};
      }
      .label {
        font-size: 16px;
        font-weight: 600;
        color: ${(props) => props.theme.colors.text};
      }
      > .attributes {
        display: flex;
        justify-content: space-between;
        gap: 118px;
        > div > div {
          margin-bottom: 10px;
          .value {
            padding-left: 5px;
            color: ${(props) => props.theme.colors.text};
          }
        }
      }
      .borderCountries {
        display: flex;
        gap: 13px;
        margin-top: 50px;
        .label {
          min-width: 135px;
        }
        .countryTags {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 10px;
        }
      }
    }
  }
  @media all and (max-width: 768px) {
    .detailsBox {
      flex-direction: column;
      gap: 99px;
      align-items: flex-start;
      .content .attributes {
        flex-direction: column;
        gap: 80px;
      }
    }

    .borderCountries {
      flex-direction: column;
    }
  }
`;

export default CountryDetail;
