import { NabvarTop, NavbarMiddle, NavbarBottom } from ".";

export function Navbar() {
  return (
    <header className="min-h-[80px] w-full">
      <NabvarTop />
      <NavbarMiddle />
      <NavbarBottom />
    </header>
  );
}
