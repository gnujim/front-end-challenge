// Third-party imports
import React from 'react';
import styled from 'styled-components';

// Local imports

const CategoriesContainer = styled.div``;

const CategoriesTitle = styled.div`
  font-size: 18px;
  font-weight: 700;
  border-bottom: 1px solid black;
`;

export const CategorySelector = () => {
  return (
    <CategoriesContainer>
      <CategoriesTitle>CATEGORIES</CategoriesTitle>
    </CategoriesContainer>
  );
};
