import ThemeSwitch from "./themeSwitch";

export default function Navbar() {
  return (
    <nav className="flex mx-auto items-center px-6 md:px-24 py-6 justify-between shadow-md">
      <p className="font-bold">Where in the world?</p>
      <ThemeSwitch />
    </nav>
  );
}
