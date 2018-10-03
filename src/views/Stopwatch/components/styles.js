import styled from 'styled-components';

const itemHeight = 48;

export const DisplayContainer = styled.div`
  display: flex;
  flex: 0 1 100%;
  justify-content: center;
  align-items: center;
  font-size: 25vw; // IDLE
  //font-size: 18.5vw;  // HOURS
  //font-size: 16.7vw; // 3 hours symbols
  //font-size: 14.9vw; // 4hours symbols
  font-weight: 100;
`;

export const ControlsContainer = styled.div`
  display: flex;
  flex: 0 0 auto;
  justify-content: space-between;
  padding: 12px 0;
`;

export const List = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0 0 1px 0;
  min-height: 100%;
  background-image: repeating-linear-gradient(
    180deg,
    //#181818,
      rgba(255, 255, 255, 0.15),
    transparent 1px,
    transparent ${itemHeight}px
  );
`;

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${itemHeight}px;
`;

export const ItemTitle = styled.div``;

export const ItemTime = styled.div`
  font-variant-numeric: tabular-nums;
  ${props => props.best && 'color: #7EDC83;'};
  ${props => props.worst && 'color: #D15C4A;'};
`;
