// Third-part imports
import { observer } from 'mobx-react-lite';
import moment from 'moment';
import React, { useContext } from 'react';
import styled from 'styled-components';

// Local imports
import { StoreContext, formatCurrency, formatCategory, Transaction } from '../utilities';
import { Title } from './Text.components';
import arrow from '../assets/arrow.svg';
import { sizes } from '../styles';
import { ColorBadge, HorizontalSeparator } from './Layout.components';

// TRANSACTION LIST
const ListContainer = styled.div`
  @media (min-width: ${sizes.tablet}) {
    margin-top: 15px;
  }
  @media (min-width: ${sizes.desktop}) {
    margin-top: 0;
    /* height not referencing parent */
    height: 80vh;
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
    transition: color 0.3s ease-in;
    cursor: pointer;
    &:hover {
      color: #5b8be2;
    }
  }
`;

const Arrow = styled.img<{ ascending: boolean }>`
  margin: 0 0 4px 6px;
  height: 15px;
  transition: transform 0.3s ease-in-out;
  transform: ${(props) => (props.ascending ? `rotate(180deg)` : `rotate(0deg)`)};
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
  margin-top: 10px;
  @media (min-width: ${sizes.desktop}) {
    overflow-y: scroll;
    /* TODO: FIX THIS HEIGHT */
    height: 90%;
  }
`;

// TRANSACTION ROW
const ListItem = styled.div`
  font-size: 18px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  grid-template-rows: auto;
  grid-template-areas:
    'date date date amount'
    'description description description balance';

  @media (min-width: ${sizes.tablet}) {
    grid-template-columns: 1fr 3fr 1fr 1fr;
    grid-template-rows: unset;
    grid-template-areas: unset;
    font-size: 22px;
  }
`;

const ListItemDate = styled.div`
  grid-area: date;
  @media (min-width: ${sizes.tablet}) {
    grid-area: unset;
  }
`;

const ListItemTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  grid-area: description;
  @media (min-width: ${sizes.tablet}) {
    grid-area: unset;
  }
`;

const ListItemText = styled.div`
  overflow: wrap;
`;

const ListMobileTitle = styled(Title)`
  font-size: 12px;
  color: black;
  @media (min-width: ${sizes.tablet}) {
    display: none;
  }
`;

const ListItemCategory = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
  @media (min-width: ${sizes.tablet}) {
    font-size: 18px;
  }
`;

const ListItemAmount = styled(ListItemText)<{ deposit: boolean }>`
  color: ${(props) => (props.deposit ? `#47af4f` : `black`)};
  text-align: end;
  grid-area: amount;
  @media (min-width: ${sizes.tablet}) {
    text-align: unset;
    grid-area: unset;
  }
`;

const ListItemBalance = styled(ListItemText)<{ overdrawn: boolean }>`
  color: ${(props) => (props.overdrawn ? `#f32d2d` : `black`)};
  text-align: end;
  grid-area: balance;
  @media (min-width: ${sizes.tablet}) {
    text-align: unset;
    grid-area: unset;
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
          const categoryColor = cat ? cat.color : '#000';
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
      <ListItemTextWrapper>
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
      </ListItemTextWrapper>
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
