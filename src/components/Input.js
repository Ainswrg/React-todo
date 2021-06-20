import React from "react";
import { StyledInput, StyledItem, StyledLabel } from "../shared/Styles";

const Input = (props) => {
   return (
      <StyledItem>
         <StyledInput id="text" {...props} />
         <StyledLabel htmlFor="text">Todo</StyledLabel>
      </StyledItem>
   );
};

export default Input;
