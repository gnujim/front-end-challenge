// Third-party imports
import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { ColorBadge, HorizontalSeparator } from './Layout.components';
import { Title } from './Text.components';
import arrow from '../assets/arrow.svg';
import { StoreContext, formatCurrency, formatCategory, Transaction } from '../utilities';
import { sizes, green, red, shadowBlue } from '../styles';

// TRANSACTION LIST STYLES
const ListContainer = styled.div`
  @media (min-width: ${sizes.tablet}) {
    margin-top: 15px;
  }
  @media (min-width: ${sizes.desktop}) {
    margin-top: 0;
  }
`;

const ListHeader = styled.div`
  display: grid;
  @media (min-width: ${sizes.tablet}) {
    grid-template-columns: 1fr 3fr 1fr 1fr;
  }
`;

const DateTitle = styled(Title)`
  @media (min-width: ${sizes.desktop}) {
    transition: color 0.2s ease-in-out;
    cursor: pointer;
    &:hover {
      color: ${shadowBlue};
    }
  }
`;

const Arrow = styled.img<{ ascending: boolean }>`
  height: 15px;
  margin: 0 0 4px 6px;
  transform: ${(props) => (props.ascending ? `rotate(180deg)` : `rotate(0deg)`)};
  transition: transform 0.3s ease-in-out;
`;

const ListTitle = styled(Title)`
  display: none;
  @media (min-width: ${sizes.tablet}) {
    display: block;
  }
`;

const ListContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  @media (min-width: ${sizes.tablet}) {
  }
  @media (min-width: ${sizes.desktop}) {
    height: 65vh;
    min-height: 600px;
    overflow-y: scroll;
  }
`;

// TRANSACTION ROW STYLES
const ListItem = styled.div`
  font-size: 18px;
  display: grid;
  grid-template-areas:
    'date date date amount'
    'description description description balance';
  @media (min-width: ${sizes.tablet}) {
    font-size: 22px;
    grid-template-areas: unset;
    grid-template-columns: 1fr 3fr 1fr 1fr;
    grid-template-rows: unset;
  }
`;

const ListItemText = styled.div`
  overflow: wrap;
`;

const ListItemDate = styled.div`
  font-size: 14px;
  grid-area: date;
  @media (min-width: ${sizes.tablet}) {
    font-size: 18px;
    grid-area: unset;
    line-height: 22px;
    padding-top: 4px;
  }
`;

const ListItemDescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: description;
  @media (min-width: ${sizes.tablet}) {
    grid-area: unset;
  }
`;

const ListMobileTitle = styled(Title)`
  color: black;
  font-size: 12px;
  @media (min-width: ${sizes.tablet}) {
    display: none;
  }
`;

const ListItemCategory = styled.div`
  align-items: center;
  color: #5a5a5a;
  display: flex;
  font-size: 14px;
  @media (min-width: ${sizes.tablet}) {
    font-size: 18px;
  }
`;

const ListItemAmount = styled(ListItemText)<{ deposit: boolean }>`
  color: ${(props) => (props.deposit ? green : `black`)};
  grid-area: amount;
  text-align: end;
  @media (min-width: ${sizes.tablet}) {
    grid-area: unset;
    text-align: unset;
  }
`;

const ListItemBalance = styled(ListItemText)<{ overdrawn: boolean }>`
  color: ${(props) => (props.overdrawn ? red : `black`)};
  grid-area: balance;
  text-align: end;
  @media (min-width: ${sizes.tablet}) {
    grid-area: unset;
    text-align: unset;
  }
`;

export const TransactionList = observer(() => {
  const { currentTransactions, toggleSortOrder, transAsc, currentCategories } = useContext(
    StoreContext,
  );
  return (
    <ListContainer>
      <ListHeader>
        <DateTitle onClick={() => toggleSortOrder()}>
          DATE
          <Arrow src={arrow} alt="arrow" ascending={transAsc} />
        </DateTitle>
        <ListTitle>TRANSACTION</ListTitle>
        <ListTitle>AMOUNT</ListTitle>
        <ListTitle>BALANCE</ListTitle>
      </ListHeader>
      <HorizontalSeparator />
      <ListContent>
        {currentTransactions.map((transaction) => {
          const cat = currentCategories.find(
            (category) => category.category === transaction.category,
          );
          const categoryColor = cat ? cat.color : 'black';
          return (
            <React.Fragment key={transaction.transactionId}>
              <TransactionRow transaction={transaction} categoryColor={categoryColor} />
              <HorizontalSeparator />
            </React.Fragment>
          );
        })}
      </ListContent>
    </ListContainer>
  );
});

const TransactionRow: React.FunctionComponent<{
  transaction: Transaction;
  categoryColor: string;
}> = (props) => {
  const {
    transaction: { transactionDate, description, category, deposit, amount, runningBalance },
    categoryColor,
  } = props;
  return (
    <ListItem>
      <ListItemDate>
        <ListMobileTitle>DATE</ListMobileTitle>
        {moment(transactionDate).format('ll')}
      </ListItemDate>
      <ListItemDescriptionWrapper>
        <ListItemText>
          <ListMobileTitle>DESCRIPTION</ListMobileTitle>
          {description}
        </ListItemText>
        {!!category && (
          <ListItemCategory>
            <ColorBadge color={categoryColor} />
            {formatCategory(category)}
          </ListItemCategory>
        )}
      </ListItemDescriptionWrapper>
      <ListItemAmount deposit={!!deposit}>
        <ListMobileTitle>AMOUNT</ListMobileTitle>
        {formatCurrency(amount)}
      </ListItemAmount>
      <ListItemBalance overdrawn={runningBalance < 0}>
        <ListMobileTitle>BALANCE</ListMobileTitle>
        {formatCurrency(runningBalance)}
      </ListItemBalance>
    </ListItem>
  );
};
