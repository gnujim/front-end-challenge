// Third-party imports
import { Select } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';

// Local imports
import { ColorBadge, HorizontalSeparator } from './Layout.components';
import { Title } from './Text.components';
import { sizes, colors } from '../styles';
import { StoreContext, formatCategory } from '../utilities';

// Get Option out of antd Select
const Option = Select.Option;

const CategoriesContainer = styled.div`
  width: 100%;
  margin-bottom: 20px;
  @media (min-width: ${sizes.desktop}) {
  }
`;

export const CategorySelector = observer(() => {
  const { currentCategories, setSelectedCategories } = useContext(StoreContext);

  const handleChange = (categories: []) => {
    setSelectedCategories(categories);
  };

  const data = currentCategories.map((category) => {
    return { name: formatCategory(category.category), value: category.count };
  });

  return (
    <CategoriesContainer>
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
      <ResponsiveContainer width={300} height={275}>
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
      </ResponsiveContainer>
    </CategoriesContainer>
  );
});
