import React from "react";

import Spinner from "./spinner.component";


const WithSpinner = WrappedConponent => ({ isLoading, ...otherProps }) => {
  return isLoading ? <Spinner /> : <WrappedConponent {...otherProps} />;
};

export default WithSpinner;
