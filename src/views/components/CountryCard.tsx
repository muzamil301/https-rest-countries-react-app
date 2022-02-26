import styled from "styled-components";
import { Link } from "react-router-dom";
import { CountryListingResponse } from "./../../models/CountriesResponse";

interface Props {
  data: CountryListingResponse;
  locale: string;
}

const CountryCard = (props: Props) => {
  const { flags, name, population, region, capital, translations } = props.data;
  const { locale } = props;
  return (
    <StyledCard>
      <Link to={`country-detail/${name}`}>
        <div className="imgBox">
          <img
            src={flags ? flags["svg"] : "/assets/images/flag-placeholder.jpg"}
            alt="title"
          />
        </div>

        <div className="contentBox">
          <h2 className="heading">
            {locale !== "" ? translations[locale] : name}
          </h2>
          <p>
            <span className="label w600">Population:</span>
            <span className="value">{population}</span>
          </p>
          <p>
            <span className="label w600">Region:</span>
            <span className="value">{region}</span>
          </p>
          <p>
            <span className="label w600">Capital:</span>
            <span className="value">{capital}</span>
          </p>
        </div>
      </Link>
    </StyledCard>
  );
};

const StyledCard = styled.div`
  min-width: 263px;
  max-width: 263px;
  border-radius: 5px;
  border: transparent;
  box-shadow: 5px 0 20px ${(props) => props.theme.colors.shadow};
  background-color: ${(props) => props.theme.colors.elements};

  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  .imgBox {
    height: 160px;
    border-radius: 5px 5px 0 0;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      border-radius: 5px 5px 0 0;
      display: block;
      border-bottom: 1px solid #f3f3f3;
      transition: all 0.3s;
    }
  }
  .contentBox {
    padding: 29px 25px;
    .heading {
      font-size: 18px;
      margin-bottom: 20px;
      color: ${(props) => props.theme.colors.text};
    }
    p {
      margin-bottom: 4px;
    }
    .label {
      color: ${(props) => props.theme.colors.text};
    }
    .value {
      padding-left: 5px;
      color: ${(props) => props.theme.colors.text};
    }
  }

  @media all and (max-width: 768px) {
    min-width: 200px;
    max-width: 200px;
  }
  @media all and (max-width: 480px) {
    min-width: 100%;
    max-width: 100%;
  }
`;

export default CountryCard;
