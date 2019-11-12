import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*,*::before, *::after{
    box-sizing: border-box;
    margin:0;
    padding:0;
    } 
a{
    text-decoration: none;
    color: inherit;
}
ul{
    list-style: none;
}
body{
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    
}
`;
