// Third-party imports
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Select } from 'antd';

// Local imports
import { getAccounts, AccountsResponse } from '../utilities';

const Option = Select.Option;

const AccountContainer = styled.div`
  margin: 25px 0;
`;

const AccountOption = styled(Option)``;

export const AccountSelector = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<AccountsResponse>();

  const handleChange = (value: string) => {
    console.log(`selected ${value}`);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getAccounts();
        setData(result);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  if (isLoading) {
    return <p>...loading</p>;
  }

  return (
    <AccountContainer>
      <Select
        defaultValue="all"
        onChange={handleChange}
        style={{ width: '100%', color: 'black', fontSize: '30px' }}
        dropdownStyle={{ backgroundColor: '#fefefe' }}>
        <AccountOption value="all">ALL ACCOUNTS</AccountOption>
        {data &&
          data.accounts.map((account) => {
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
};
