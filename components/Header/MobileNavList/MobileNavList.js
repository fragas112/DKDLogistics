import React from "react";

import classes from "./MobileNavList.module.scss";



const MobileNavList= ({ children }) => (
  
  <div className={classes.ListItems}>{children}</div>
  
);

export default MobileNavList;
