// Third-party imports
import { Select } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { TitleBorder } from './Text.components';
import { StoreContext, formatCategory } from '../utilities';

// Get Option out of antd
const Option = Select.Option;

const CategoriesContainer = styled.div`
  width: 100%;
`;

export const CategorySelector = observer(() => {
  const { loading, currentCategories, setSelectedCategories } = useContext(StoreContext);

  const handleChange = (categories: []) => {
    setSelectedCategories(categories);
  };

  return (
    <CategoriesContainer>
      <TitleBorder>CATEGORIES</TitleBorder>
      {loading ? (
        <p>...loading</p>
      ) : (
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
      )}
    </CategoriesContainer>
  );
});
