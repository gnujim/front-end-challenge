import styled from 'styled-components';

export const HorizontalSeparator = styled.div`
  border-bottom: 1px solid black;
`;

export const ColorBadge = styled.div<{ color: string }>`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  height: 10px;
  width: 10px;
  margin-right: 5px;
`;

export const HorizontalFlex = styled.div<{ align?: string }>`
  display: flex;
  flex-direction: row;
  align-items: ${(props) => (props.align ? props.align : 'unset')};
`;

export const VerticalFlex = styled.div`
  display: flex;
  flex-direction: column;
`;
