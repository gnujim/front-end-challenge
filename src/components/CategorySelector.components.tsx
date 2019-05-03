// Third-party imports
import { Select } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { TitleBorder } from './Text.components';
import { StoreContext, formatCategory } from '../utilities';

// Get Option out of antd Select
const Option = Select.Option;

const CategoriesContainer = styled.div`
  width: 100%;
`;

export const CategorySelector = observer(() => {
  const { currentCategories, setSelectedCategories } = useContext(StoreContext);

  const handleChange = (categories: []) => {
    setSelectedCategories(categories);
  };

  return (
    <CategoriesContainer>
      <TitleBorder>CATEGORIES</TitleBorder>

      <Select
        className="category-select"
        mode="multiple"
        style={{ width: '100%' }}
        allowClear={true}
        placeholder="Please Select"
        onChange={handleChange}>
        {currentCategories.map((cat) => {
          return (
            <Option className="select-option" key={cat.category} disabled={!cat.count}>
              {formatCategory(cat.category)} ({cat.count})
            </Option>
          );
        })}
      </Select>
    </CategoriesContainer>
  );
});
