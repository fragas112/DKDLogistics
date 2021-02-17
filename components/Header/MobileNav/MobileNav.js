import React, { Children, useState } from "react";
import classes from "./MobileNav.module.scss";

const MobileNav = ({ children }) => {
  
    const [status, setStatus] = useState('close');
    const [burger, setBurger] = useState(false)

    return (
      <div
        className={classes.BurgerMenu__container}
        onClick={() => setStatus(status === 'open' ? 'close' : 'open')}
        role = "button"
      >
        <i className={classes[status]}></i>
        <i className={classes[status]}></i>
        <i className={classes[status]}></i>

        {status === 'open' ? <>{children}</> : null}
      </div>
      
  );
};

export default MobileNav;