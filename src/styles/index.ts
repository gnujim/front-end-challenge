import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700|Heebo:100,200,300,400,800');
  
  body {
    margin: 0;
    padding: 0;
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 300;
    letter-spacing: .5px;

    /* Ant Design customized styling */
    .account-select, .category-select {
      .ant-select-selection {
        border-radius: 0;
        &:hover {
          border-color: #80a7f7;
        }
      }
    }

    .ant-select-dropdown {
      border-radius: 0;
      .select-option {
        &:hover {
          background-color: #bed5ff;
        }
        &.ant-select-dropdown-menu-item-active {
          background-color: #bed5ff;
        }
        &.ant-select-dropdown-menu-item:first-child,  &.ant-select-dropdown-menu-item:last-child{
          border-radius: 0;
        }
      }
    }
  }
`;

export * from './Constants';
