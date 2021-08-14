import { useState, useEffect } from "react";
import GLOBAL_CLICK_EVENT from "../../util/global_click";
import Button from "./Button";

export default function Menu(props) {
  const { button, children, buttonName, menuClass } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const clicked = () => setIsOpen(false);

    if (isOpen) {
      window.addEventListener(GLOBAL_CLICK_EVENT, clicked);
    } else {
      window.removeEventListener(GLOBAL_CLICK_EVENT, clicked);
    }

    return () => window.removeEventListener(GLOBAL_CLICK_EVENT, clicked);
  }, [isOpen]);

  return (
    <div className={`menu ${isOpen && "menu-active"} ${menuClass}`}>
      {button(() => setIsOpen(true), buttonName)}
      <ul className="menu__list" role="menu">
        {children}
      </ul>
    </div>
  );
}

const defaultButton = (open, buttonName) => (
  <Button
    className="menu__button"
    type="button"
    name={buttonName}
    onClick={open}
  />
);

Menu.defaultProps = {
  button: defaultButton,
};
