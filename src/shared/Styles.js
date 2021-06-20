import styled, { createGlobalStyle } from "styled-components";
import { FaTrash } from "react-icons/fa";


//!theme

export const theme = {
   colors: {
      primary: "#03e9f4",
      secondary: "#fff",
      // gray200: "#edf2f7",
      // gray300: "#e2e8f0",
      // gray400: "#cbd5e0",
      gray500: "#a0aec0",
      // gray800: "#2d3748",
      // green: "#009688",
      // blue: "#5677fc",
      // blueDark: "#3b50ce",
      lineare1: "linear-gradient(#141e30, #243b55)",
      // dark1: "rgba(0,0,0,.5)",
   }
}

//!Global
export const Global = createGlobalStyle`
* {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
   font-family: sans-serif;
}
`;

//?App
export const StyledApp = styled.div`
   text-align: center;
   box-sizing: border-box;
   background: ${props => props.color || props.theme.colors.lineare1};
   height: 100vh;
   color: ${props => props.color || props.theme.colors.secondary};
`;

//?Flex
export const StyledFlex = styled.div`
   display: flex;
   flex-direction: ${props => props.direction || 'row'};
   align-items: ${props => props.align || 'stretch'};
   justify-content: ${props => props.justify || 'stretch'};
   margin: ${({margin}) => margin || '0'};
   flex-basis: ${props => props.basis || "auto"}
`;

//? tdItem
export const Li = styled.li`
   margin-bottom: 1rem;
   list-style: none;
   background: ${(props) => props.color || props.theme.colors.gray500};
   width: 600px;
   ${(props) =>
      props.cls === "todo completed" && `
      opacity: 0.5;
      `
   };
   
`;
export const Label = styled.label`
   display: flex;
   justify-content: space-between;
   padding: 15px;
   cursor: pointer;
`;
export const Span = styled.span`
${(props) =>
   props.cls === "todo completed" && `
   text-decoration: line-through red;
   `};
   display: flex;
   justify: space-between;
`;
export const Input = styled.input`
   position: relative;
   top: rem(-6);
   margin: 0 1rem 0 0;

   cursor: pointer;

   &:before {
      transition: all 0.3s ease-in-out;

      content: "";

      position: absolute;
      left: 0;
      z-index: 1;

      width: 1rem;
      height: 1rem;

      border: 2px solid ${props => props.color || props.theme.colors.primary};
   }
   &:checked {
      &:before {
         transform: rotate(-45deg);

         height: 0.5rem;

         border-color: ${props => props.color || props.theme.colors.primary};
         border-top-style: none;
         border-right-style: none;
      }
   }

   &:after {
      content: "";

      position: absolute;
      top: rem(-2);
      left: 0;

      width: 1.2rem;
      height: 1.2rem;

      background: #fff;

      cursor: pointer;
   }
`;
export const I = styled.i`
   color: red;
   font-size: 20px;
   text-decoration: none;
   &:hover {
      transform: scale(1.1);
   }
`;
export const Icon = styled(FaTrash)`
   color: red;
   font-size: 20px;
   text-decoration: none;
   &:hover {
      transform: scale(1.1);
   }
`;

//?Input
export const StyledInput = styled.input`
   width: 500px;
   padding: 10px 0;
   font-size: 16px;
   color: #fff;
   margin-bottom: 30px;
   border: none;
   outline: none;
   background: transparent;
   background: no-repeat bottom, 50% calc(100% - 1px);
   background-size: 0 100%, 100% 100%;
   background-image: linear-gradient(0deg, ${props => props.color || props.theme.colors.primary} 2px, rgba(156, 39, 176, 0) 0), linear-gradient(0deg, #ccc 1px, hsla(0, 0%, 82%, 0) 0);
   caret-color:  ${props => props.color || props.theme.colors.primary};
   color: rgba(0,0,0,0.2);
   
   &:focus+label {
      top: -20px;
      left: 0;
      color: ${props => props.color || props.theme.colors.primary};
      font-size: 12px;
   }
   &:focus {
      outline: none;
      background-size: 100% 100%, 100% 100%;
      transition-duration: 0.3s;
      box-shadow: none;
      color: ${props => props.color || props.theme.colors.secondary};
   }
`;
export const StyledItem = styled.div`
   position: relative;
   margin-bottom: 10px;
`;
export const StyledLabel = styled.label`
   position: absolute;
   top:0;
   left: 0;
   padding: 10px 0;
   font-size: 16px;
   color: #fff;
   pointer-events: none;
   transition: .5s;
`;