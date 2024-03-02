import { ICountry } from "@/types/country";

export async function getAllCountries(): Promise<ICountry[]> {
  const response = await fetch("https://restcountries.com/v3.1/all");

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  return response.json();
}

export async function getCountryByName(
  countryName: string,
): Promise<ICountry[]> {
  const response = await fetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`,
  );

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  return response.json();
}

export async function getCountryBorders(countryName: ICountry) {
  const countries = await getAllCountries();

  return countryName.borders?.map((border) => {
    const borderCountry = countries.find(
      (country: ICountry) => country.cca3 === border,
    );
    return {
      name: borderCountry?.name.common,
    };
  });
}
