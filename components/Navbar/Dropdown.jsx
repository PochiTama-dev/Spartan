import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRef } from "react";
import { useState, useEffect } from "react";
import { DropdownList } from "./DropdownList";

export const Dropdown = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return (
      <div className="menu-container" ref={menuRef}>
        <div
          className="menu-trigger"
          onClick={() => {
            setOpen(!open);
          }}
        >
          {
            !open ? <FontAwesomeIcon className={`header-icon`} icon={faBars} />
            : <FontAwesomeIcon className={`header-icon`} icon={faXmark} />
          }
          
        </div>

        <div className={`dropdown-menu ${open ? "active" : "inactive"}`}>
          <ul className='dropdown-list'>{open && <DropdownList />}</ul>
        </div>
      </div>
  );
};
