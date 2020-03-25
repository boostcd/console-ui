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
    color: #212529;
    text-decoration: none;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-block-start: 0;
    margin-block-end: 0;
  }
`;
