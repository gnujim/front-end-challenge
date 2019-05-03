import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700|Heebo:100,200,300,400,800');
  
  html {
    /* height: 100%; */
    box-sizing: border-box;
  }

  body {
    background: radial-gradient(circle, #5b8be2 40%, #5a5fe4 100%);
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 300;
    height: 100vh;
    letter-spacing: .5px;
    margin: 0;
    padding: 0;
    /* min-height: 100vh; */

    /*** Ant Design customized styling ***/
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
    .date-range-picker {
      width: 100%;
      .ant-calendar-picker-input {
        border-radius: 0;
        &:hover {
          border-color: #80a7f7;
        }
      }
    }
  }
`;

export * from './Constants';
