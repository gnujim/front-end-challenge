// Third-party imports
import { DatePicker } from 'antd';
import { observer } from 'mobx-react-lite';
import { Moment } from 'moment';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { HorizontalSeparator } from './Layout.components';
import { Title } from './Text.components';
import { StoreContext } from '../utilities';

// Get RangePicker out of antd DatePicker
const { RangePicker } = DatePicker;

const DateRangeContainer = styled.div``;

export const DateRange = observer(() => {
  const { dateRange, setDateRange } = useContext(StoreContext);

  return (
    <DateRangeContainer>
      <Title>DATE RANGE</Title>
      <HorizontalSeparator />
      <RangePicker
        defaultValue={dateRange}
        onChange={(dates) => {
          setDateRange(dates as [Moment, Moment]);
        }}
      />
    </DateRangeContainer>
  );
});
