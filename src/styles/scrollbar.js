import { css } from 'styled-components';

// Custom webkit scrollbar
export default css`
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  ::-webkit-scrollbar-button:end:increment,
  ::-webkit-scrollbar-button:start:decrement {
    display: none;
    background: transparent;
  }

  ::-webkit-scrollbar-track-piece {
    background: rgba(9, 30, 66, 0.08);
  }

  ::-webkit-scrollbar-track-piece:horizontal:start {
    border-radius: 4px 0 0 4px;
  }

  ::-webkit-scrollbar-track-piece:horizontal:end {
    border-radius: 0 4px 4px 0;
  }

  ::-webkit-scrollbar-thumb:horizontal,
  ::-webkit-scrollbar-thumb:vertical {
    display: block;
    height: 48px;
    background: #a6a6a6;
    border-radius: 4px;
  }
`;
