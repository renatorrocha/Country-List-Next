export async function getAllCountries() {
  const response = await fetch("https://restcountries.com/v3.1/all");

  if (!response.ok) {
    throw new Error("Failed to fetch data.");
  }

  return response.json();
}
