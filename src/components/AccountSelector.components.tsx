// Third-party imports
import { Select } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { StoreContext } from '../utilities';

// Get Option out of antd Select
const Option = Select.Option;

const AccountContainer = styled.div`
  margin-bottom: 25px;
`;

export const AccountSelector = observer(() => {
  const { allAccounts, setCurrentAccount } = useContext(StoreContext);

  const handleChange = (value: string) => {
    setCurrentAccount(value);
  };

  return (
    <AccountContainer>
      <Select
        className="account-select"
        defaultValue="ALL ACCOUNTS"
        onChange={handleChange}
        style={{ width: '100%', color: 'black', fontSize: '30px' }}
        dropdownStyle={{ backgroundColor: '#fefefe' }}>
        <Option className="select-option" value="all">
          ALL ACCOUNTS
        </Option>
        {allAccounts.map((account) => {
          const { accountId, accountName, accountNumber } = account;
          return (
            <Option className="select-option" key={accountId} value={accountId}>
              {accountName} - {accountNumber}
            </Option>
          );
        })}
      </Select>
    </AccountContainer>
  );
});
