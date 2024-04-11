import { useCallback, useEffect } from "react";

const useCloseOnOutsideClick = (ref, isOpen, setIsOpen) => {
  const closeDropdownOnOutsideClick = (e) => {
    if (ref.current && !ref.current.contains(e.target)) {
      setIsOpen(false);
    }
  };

  const addOutsideClickListeners = useCallback(() => {
    document.addEventListener("mousedown", closeDropdownOnOutsideClick);
    document.addEventListener("touchstart", closeDropdownOnOutsideClick);
  }, []);

  const removeOutsideClickListeners = useCallback(() => {
    document.removeEventListener("mousedown", closeDropdownOnOutsideClick);
    document.removeEventListener("touchstart", closeDropdownOnOutsideClick);
  }, []);

  useEffect(() => {
    if (isOpen) {
      addOutsideClickListeners();
    } else {
      removeOutsideClickListeners();
    }

    return () => {
      removeOutsideClickListeners();
    };
  }, [addOutsideClickListeners, removeOutsideClickListeners, isOpen]);
};

export default useCloseOnOutsideClick;
