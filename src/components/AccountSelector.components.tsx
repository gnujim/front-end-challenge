// Third-party imports
import { Select } from 'antd';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { StoreContext } from '..';

const Option = Select.Option;

const AccountContainer = styled.div`
  margin: 25px 0;
`;

const AccountOption = styled(Option)``;

export const AccountSelector = observer(() => {
  const { loading, allAccounts } = useContext(StoreContext);

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  if (loading) {
    return <p>...loading</p>;
  }

  return (
    <AccountContainer>
      <Select
        defaultValue="all"
        onChange={handleChange}
        style={{ width: '100%', color: 'black', fontSize: '30px' }}
        dropdownStyle={{ backgroundColor: '#fefefe' }}>
        <AccountOption key="all" value="all">
          ALL ACCOUNTS
        </AccountOption>
        {allAccounts.map((account) => {
          const { accountId, accountName } = account;
          return (
            <AccountOption key={accountId} value={accountName}>
              {accountName}
            </AccountOption>
          );
        })}
      </Select>
    </AccountContainer>
  );
});
