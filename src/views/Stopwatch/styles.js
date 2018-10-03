import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

export const DisplayWrapper = styled.div`
  flex: 0 0 55vh;
  padding: 0 12px;
  display: flex;
  flex-direction: column;
`;

export const LapsWrapper = styled.div`
  padding: 0 12px;
  flex: 1 1 calc(100% - 55vh);
  overflow: auto;
  max-height: calc(100% - 45vh);
  -webkit-overflow-scrolling: touch;
`;
