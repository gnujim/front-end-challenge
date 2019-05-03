// Third-party imports
import { Select } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';

// Local imports
import { ColorBadge, HorizontalSeparator } from './Layout.components';
import { Title } from './Text.components';
import { sizes, colors } from '../styles';
import { StoreContext, formatCategory } from '../utilities';

// Get Option out of antd Select
const Option = Select.Option;

const CategoriesContainer = styled.div`
  margin: 15px 0;
  width: 100%;
  @media (min-width: ${sizes.tablet}) {
    display: grid;
    grid-area: categories;
  }
  @media (min-width: ${sizes.tablet}) {
    display: flex;
    flex-direction: column;
  }
`;

const PieChartContainer = styled.div<{ tablet: boolean }>`
  display: ${(props) => (!props.tablet ? 'flex' : 'none')};
  width: 100%;
  justify-content: center;
  @media (min-width: ${sizes.tablet}) {
    display: ${(props) => (props.tablet ? 'flex' : 'none')};
  }
  @media (min-width: ${sizes.desktop}) {
    display: ${(props) => (!props.tablet ? 'flex' : 'none')};
  }
`;

export const CategorySelector = observer(() => {
  const { currentCategories, setSelectedCategories } = useContext(StoreContext);

  const handleChange = (categories: []) => {
    setSelectedCategories(categories);
  };

  // make data array for recharts pie chart
  const data = currentCategories.map((category) => {
    return {
      name: formatCategory(category.category),
      value: category.count,
    };
  });

  return (
    <CategoriesContainer>
      <PieChartContainer tablet={true}>
        <CategoryPieChart data={data} />
      </PieChartContainer>
      <Title>CATEGORIES</Title>
      <HorizontalSeparator />
      <Select
        className="category-select"
        mode="multiple"
        style={{ width: '100%', marginTop: '10px' }}
        allowClear={true}
        placeholder="Please Select"
        onChange={handleChange}>
        {currentCategories.map((cat) => {
          return (
            <Option className="select-option" key={cat.category} disabled={!cat.count}>
              <ColorBadge color={cat.color} />
              {formatCategory(cat.category)} ({cat.count})
            </Option>
          );
        })}
      </Select>
      <PieChartContainer tablet={false}>
        <CategoryPieChart data={data} />
      </PieChartContainer>
    </CategoriesContainer>
  );
});

const CategoryPieChart: React.FunctionComponent<{ data: { name: string; value: number }[] }> = (
  props,
) => {
  const { data } = props;
  return (
    <PieChart width={300} height={275}>
      <Pie
        data={data}
        cx={150}
        cy={150}
        outerRadius={110}
        fill="#8884d8"
        dataKey="value"
        onClick={(value) => console.log(value.name)}>
        {data.map((cat, index) => (
          <Cell key={index} fill={colors[index % colors.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
  );
};
