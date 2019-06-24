import { createGlobalStyle } from "styled-components";
import { colors } from './index';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        font-family: Arial, Helvetica, sans-serif;
        font-size: 14px;
        background: ${colors.darkBlue};
        text-rendering: optimizeLegibility;
        -webkit-font-smoothing: antialiased;
        color: #565656;
    }
    html, body, #root {
        height: 100%;
    }
`;