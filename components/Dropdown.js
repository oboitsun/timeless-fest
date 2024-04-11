import { useEffect, useRef, useState } from "react";
import useCloseOnOutsideClick from "../hooks/outsideClick";

export default function Dropdown({
  children,
  collapse,
  toggleMenu = () => {},
  position,
  triggerEl,
}) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef();
  useEffect(() => {
    collapse && setIsOpen(false);
  }, [collapse]);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
    toggleMenu(!isOpen);
  };

  useCloseOnOutsideClick(dropdownRef, isOpen, setIsOpen);

  return (
    <div className="w-full relative" ref={dropdownRef}>
      <div className="w-full" onClick={toggleDropdown}>
        {triggerEl}
      </div>

      <div
        onClick={toggleDropdown}
        className={`gradient border-white z-10 border absolute  w-full max-h-[320px] overflow-y-auto transition-all min-w-max top-full -translate-y-px py-2 ${
          position === "bottomRight" ? "right-0" : ""
        } ${isOpen ? "" : "pointer-events-none opacity-0"}`}>
        {children}
      </div>
    </div>
  );
}
