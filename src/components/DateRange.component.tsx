// Third-party imports
import { DatePicker } from 'antd';
import { observer } from 'mobx-react-lite';
import { Moment } from 'moment';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { HorizontalSeparator, VerticalFlex } from './Layout.components';
import { Title } from './Text.components';
import { StoreContext } from '../utilities';
import { sizes } from '../styles';

// Get RangePicker out of antd DatePicker
const { RangePicker } = DatePicker;

const DateRangeContainer = styled.div`
  @media (min-width: ${sizes.tablet}) {
    display: grid;
    grid-area: daterange;
    align-self: end;
    margin-bottom: 15px;
  }
  @media (min-width: ${sizes.desktop}) {
    width: 100%;
    margin-top: 15px;
  }
`;

export const DateRange = observer(() => {
  const { dateRange, setDateRange } = useContext(StoreContext);

  return (
    <DateRangeContainer>
      <VerticalFlex width={'100%'}>
        <Title>DATE RANGE</Title>
        <HorizontalSeparator />
        <RangePicker
          className="date-range-picker"
          defaultValue={dateRange}
          onChange={(dates) => {
            setDateRange(dates as [Moment, Moment]);
          }}
        />
      </VerticalFlex>
    </DateRangeContainer>
  );
});
