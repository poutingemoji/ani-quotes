import { useState } from "react";
import Menu from "./Menu";

function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div
      className="fixed bottom-0 right-0 z-50 flex items-center justify-center mb-4 mr-4 rounded-lg w-14 h-14 lg:hidden bg-foreground-light"
      onClick={toggle}
    >
      <Menu isOpen={isOpen} />
      <i class="fas fa-bars text-blue text-4xl"></i>
    </div>
  );
}

export default Hamburger;
