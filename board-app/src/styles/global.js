import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    /* Link의 밑줄과 색 없애기 */
    ul{
        /* Remove underline */
        a {
            text-decoration: none;
            color: #000;
        }
    }
`;

export default GlobalStyles;
