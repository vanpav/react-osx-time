import styled from 'styled-components';

const itemHeight = 48;

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
