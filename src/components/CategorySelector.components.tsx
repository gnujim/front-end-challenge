// Third-party imports
import { Select } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { StoreContext } from '..';

const Option = Select.Option;

const CategoriesContainer = styled.div`
  width: 100%;
`;

const CategoriesTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid black;
`;

const CategoryOption = styled(Option)``;

export const CategorySelector = observer(() => {
  const { loading, allCategories } = useContext(StoreContext);

  if (loading) {
    return <p>...loading</p>;
  }

  const handleChange = (value: string) => {
    console.log(value);
  };

  return (
    <CategoriesContainer>
      <CategoriesTitle>CATEGORIES</CategoriesTitle>
      <Select
        mode="multiple"
        style={{ width: '100%' }}
        allowClear={true}
        placeholder="Please Select"
        onChange={handleChange}>
        {allCategories.map((cat) => {
          return <CategoryOption key={cat}>{cat}</CategoryOption>;
        })}
      </Select>
    </CategoriesContainer>
  );
});
