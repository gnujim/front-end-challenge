// Third-party imports
import React from 'react';
import styled from 'styled-components';
import { DatePicker } from 'antd';

// Local imports
import { TitleBorder } from './Text.components';

// Get RangePicker out of antd DatePicker
const { RangePicker } = DatePicker;

const DateRangeContainer = styled.div``;

export const DateRange = () => {
  return (
    <DateRangeContainer>
      <TitleBorder>DATE RANGE</TitleBorder>
      <RangePicker />
    </DateRangeContainer>
  );
};
