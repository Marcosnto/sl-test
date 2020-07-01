import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        -webkit-font-smoothing: antialiased;
    }
    body, input, button {
      font: 16px Roboto, sans-serif;
    }
    #root {
      max-width: 960px;
      margin: 0 auto;
      padding: 40px 20px;
    }

    button {
      padding: 6px 12px;
      background: #f5f6fa;
      border: solid 1px #192a56;
      border-radius: 4px;
      cursor: pointer;

      &:hover {
        color: #fff;
        background: #1EA7D8;
      }
    }
`;