import Countries from "@/components/countries";
import SearchBar from "@/components/searchbar";

export default function Home() {
  return (
    <main className="max-h-screen px-24 pt-10">
      <SearchBar />
      <Countries />
    </main>
  );
}
