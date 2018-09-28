// @flow
import React from 'react';
import { pure } from 'recompose';
import { formatTimeString } from '../../utils';
import { Item, ItemTime, ItemTitle } from './styles';

type Props = {
  lap: number,
  lapID: number,
  quality?: number,
};

const Lap = ({ lap, lapID, quality }: Props) => (
  <Item>
    <ItemTitle>Круг {lapID}</ItemTitle>
    <ItemTime best={quality === 1} worst={quality === -1}>
      {formatTimeString(lap)}
    </ItemTime>
  </Item>
);

Lap.defaultProps = {
  quality: 0,
};

export default pure(Lap);