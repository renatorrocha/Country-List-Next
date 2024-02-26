
import ThemeSwitch from "./themeSwitch";

export default function Navbar() {
  return (
    <nav className="flex mx-auto items-center px-24 py-4 justify-between shadow-md transition-all">
      <p className="font-bold">Where in the world</p>
      <ThemeSwitch />
    </nav>
  );
}
