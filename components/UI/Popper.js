"use client";
import { ChevronDownIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import { useRef, useState } from "react";
import { usePopper } from "react-popper";
import useCloseOnOutsideClick from "../../hooks/outsideClick";

export default function Popper({ country = "nz", scrolled = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const referenceElement = useRef(null);
  const [popperElement, setPopperElement] = useState(null);
  const { styles, attributes, update } = usePopper(referenceElement.current, popperElement, {
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 8],
        },
      },
    ],
    placement: "bottom-start",
    strategy: "fixed",
  });

  useCloseOnOutsideClick(dropdownRef, isOpen, (val) => {});
  const toggleDropdown = () => {
    update();
    setIsOpen(!isOpen);
  };

  return (
    <div className="w-max relative" ref={dropdownRef}>
      <button
        ref={referenceElement}
        className="w-full bg-white text-black py-4 px-4 font-matiz text-lg uppercase flex items-center gap-1 leading-none"
        onClick={toggleDropdown}>
        <span className="top-0.5 relative">{country}</span>{" "}
        <ChevronDownIcon className="w-4 h-4  text-white stroke-black stroke" />
      </button>

      <div
        ref={setPopperElement}
        style={{ ...styles.popper, width: referenceElement?.current?.clientWidth }}
        {...attributes.popper}
        className={`  z-10   transition-opacity min-w-max font-matiz uppercase text-lg text-black bg-white flex flex-col gap-2 p-4  ${
          isOpen ? "" : " pointer-events-none opacity-0"
        }`}>
        <Link className="hover:text-primary" href="/aus">
          AUS
        </Link>
        <Link className="hover:text-primary" href="/nz">
          NZ
        </Link>
      </div>
    </div>
  );
}
