import React, { Fragment } from "react";

const Conditional = props => {
  return <Fragment>{props.showIf && props.children}</Fragment>;
};

export default Conditional;
