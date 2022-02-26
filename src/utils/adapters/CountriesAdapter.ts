import axios from "axios";
import { BASE_URL } from "../../config/Constants";

export const getAllCountriesData = async () => {
  const countries: any = await axios
    .get(
      `${BASE_URL}/all?fields=flags,name,population,region,capital,translations`
    )
    .catch((err) => console.log(err));

  return countries["data"];
};

export const getCountriesByRegion = async (region: string) => {
  if (region === "") {
    return false;
  } else if (region === "all") {
    return getAllCountriesData();
  } else {
    let data: any = await axios
      .get(`${BASE_URL}/region/${region}`)
      .catch((err) => console.log(err));
    return data["data"];
  }
};

export const getCountryDetailData = async (name: string) => {
  let data: any = await axios
    .get(`${BASE_URL}/name/${name}`)
    .catch((err) => console.log(err));
  return data;
};

// getting border country detial with alpha code
export const getBorderCountryByCode = async (code: string) => {
  let data: any = await axios
    .get(`${BASE_URL}/alpha?codes=${code}`)
    .catch((err) => console.log(err));
  return data;
};
