import { FiPackage } from "react-icons/fi";

import { AuthButton, NavLink } from ".";
import { ModeToggle } from "../dark-mode/mode-toggle";

export const Navbar = () => {
  return (
    <nav className="flex items-center justify-between p-4">
      <div className="flex items-center gap-x-1">
        <FiPackage className="size-5" />
        <p>Next.js Starter</p>
      </div>
      <NavLink />
      <div className="flex items-center gap-x-3">
        <AuthButton minimal={false} />
        <ModeToggle />
      </div>
    </nav>
  );
};
