export interface ICountry {
  name: {
    common: string;
    official: string;
    nativeName: {
      language: {
        official: string;
        common: string;
      };
    };
  };

  population: number;
  region: string;
  capital: string;
  subregion: string;
  tld: string;
  languages: string[];
  cca3: string;

  currencies: {
    currency: {
      name: string;
      symbol: string;
    };
  };

  borders: string[];

  flags: {
    svg: string;
    alt: string;
  };
}
