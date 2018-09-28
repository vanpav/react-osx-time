import styled, { injectGlobal } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  flex: 1 1 auto;
  overflow-y: auto;
  height: 100%;
`;

injectGlobal`
  * {
    box-sizing: border-box;
  }

  html, body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
      Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", sans-serif;
    font-size: 18px;
  }
  
  body {
    background: #0D0D0D;
    color: #FBFBFB;
  }
`;
