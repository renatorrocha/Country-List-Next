export interface ICountry {
  name: { common: string };
  flags: {
    svg: string;
    alt: string;
  };
  population: number;
  region: string;
  capital: string;
}
