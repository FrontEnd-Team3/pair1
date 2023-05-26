import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    ul{
        /* Remove underline */
        a {
        text-decoration: none;
        }
    
        /* Change color */
        a:hover,
        a:focus {
        color: #000; /* Replace with your desired color */
        }
    }
`;

export default GlobalStyles;
