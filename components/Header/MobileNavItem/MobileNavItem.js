import React from "react";
import Link from "next/link";

import classes from "./MobileNavItem.module.scss";


const MobileNavItem = ({
  children,
  as,
  placeholder,
}) => (
  <div className={classes.HamburgerMenuList}>
    {children ? (
      children
    ) : (
      <Link as={as}>
        <a>{placeholder}</a>
      </Link>
    )}
  </div>
);

export default MobileNavItem;
