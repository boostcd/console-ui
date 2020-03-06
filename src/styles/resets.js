import { css } from 'styled-components';

export default css`
  * {
    box-sizing: border-box;
  }

  body {
    color: #212529;
    background: #f5f5f5;
    font-size: 12px;
    font-family: 'Open Sans', sans-serif;

    @media (min-width: 768px) {
      font-size: 16px;
    }
  }

  a {
    text-decoration: none;
  }
`;
