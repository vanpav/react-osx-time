// @flow
import React from 'react';
import { pure } from 'recompose';
import { Item, ItemTime, ItemTitle } from './styles';
import trans from 'src/translations';
import TimeToString from 'src/components/TimeToString/index';

type LapPropsType = {
  id: number,
  time: number,
  isBest?: boolean,
  isWorst?: boolean,
  // children?: Element<typeof TimeToString>
};

const Lap = ({ time, id, isBest, isWorst }: LapPropsType) => (
  <Item>
    <ItemTitle>
      {trans('lap')} {id}
    </ItemTitle>
    <ItemTime best={isBest} worst={isWorst}>
      <TimeToString time={time} />
    </ItemTime>
  </Item>
);

export default pure(Lap);
