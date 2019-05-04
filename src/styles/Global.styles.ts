// Third-party imports
import { createGlobalStyle } from 'styled-components';

// Local imports
import { colors } from './Constants.styles';

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Open+Sans+Condensed:300,700|Heebo:800');

  body {
    background: radial-gradient(circle, ${colors.lighterBlue} 40%, ${colors.darkerBlue} 100%);
    font-family: 'Open Sans Condensed', sans-serif;
    font-weight: 300;
    letter-spacing: .5px;
    margin: 0;
    padding: 0;

    /*** Ant Design customized styling ***/
    .account-select, .category-select {
      .ant-select-selection {
        border-radius: 0;
        &:hover {
          border-color: ${colors.borderBlue};
        }
        .ant-select-selection__choice__content {
          display: flex;
          align-items: center;
        }
        .ant-select-selection__choice__remove {
          top: 0;
        }
      }
    }
    .ant-select-dropdown {
      border-radius: 0;
      .select-option {
        align-items: center;
        display: flex;
        &:hover {
          background-color: ${colors.highlightBlue};
        }
        &.ant-select-dropdown-menu-item-active {
          background-color: ${colors.highlightBlue};
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
        margin-top: 10px;
        &:hover {
          border-color: ${colors.borderBlue};
        }
      }
    }
  }
`;
