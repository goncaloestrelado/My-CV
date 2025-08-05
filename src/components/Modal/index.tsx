import { useEffect, useRef } from "react";

interface ModalChildren {
  children: JSX.Element;
  setIsOpen: (isOpen: boolean) => void;
}

export function Modal({ children, setIsOpen }: ModalChildren) {
  const popupRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const closeDropdown = (e: any) => {
      if (e.path[0] !== popupRef.current) {
        return;
      }

      setIsOpen(false);
    };

    document.body.addEventListener("click", closeDropdown);

    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  return (
    <div className="bg-zinc-900 bg-opacity-80 absolute inset-0 z-50">
      <div ref={popupRef} className="flex h-screen justify-center items-center">
        {children}
      </div>
    </div>
  );
}
