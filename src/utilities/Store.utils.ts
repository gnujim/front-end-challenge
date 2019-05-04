// Third-party imports
import { compareAsc, compareDesc } from 'date-fns';
import { action, computed, decorate, observable } from 'mobx';
import moment, { Moment } from 'moment';
import React from 'react';

// Local imports
import {
  Account,
  AccountsResponse,
  getAccounts,
  getTransactions,
  Transaction,
  TransactionsResponse,
  CategoriesResponse,
  getCategories,
} from './Api.utils';
import { categoryColors } from '../styles';

export class AppStore {
  // loading state of application
  loading = true;
  // most recent error from api
  apiError = '';
  // raw data fetched from api
  apiData: {
    transactions?: TransactionsResponse;
    accounts?: AccountsResponse;
    categories?: CategoriesResponse;
  } = {};
  // all transactions in the app
  allTransactions: Transaction[] = [];
  // all accounts in the app
  allAccounts: Account[] = [];
  // all categories in the app
  allCategories: string[] = [];
  // current selected accountId
  currentAccountId = 'all';
  // user selected categories for filter
  selectedCategories = [];
  // boolean flag for sorting transaction order
  transAsc = false;
  // default date range for all transactions
  defaultDateRange: [Moment, Moment] = [moment(), moment()];
  // user selected date range for filter
  dateRange: [Moment, Moment] = [moment(), moment()];

  // initializing data store with fetched data
  async init() {
    try {
      await Promise.all([this.fetchTransactions(), this.fetchAccounts(), this.fetchCategories()]);
    } catch (error) {
      this.apiError = error.message;
    }
    this.loading = false;
  }

  async fetchTransactions() {
    const data = await getTransactions();
    this.apiData.transactions = data;
    // set default date range from earliest transaction date to now
    this.defaultDateRange = [moment(data.earliestTransactionDate), moment()];
    // set initial date range from earliest transcation date to now
    this.dateRange = [moment(data.earliestTransactionDate), moment()];
    // NOTE: coerse transaction.category into a string, was running into issues formatting without this
    this.allTransactions = data.transactions.map((transaction) => {
      return { ...transaction, category: `${transaction.category || ''}` };
    });
  }

  async fetchAccounts() {
    const data = await getAccounts();
    this.apiData.accounts = data;
    this.allAccounts = data.accounts;
  }

  async fetchCategories() {
    const data = await getCategories();
    this.apiData.categories = data;
    this.allCategories = data.categories;
  }

  // sets current account wtih user selected account
  setCurrentAccount(accountId: string) {
    this.currentAccountId = accountId;
  }

  // sets selected categories with user selected categories
  setSelectedCategories(categories: []) {
    this.selectedCategories = categories;
  }

  // sets date range with user selected date ranges
  setDateRange(dates: [Moment, Moment]) {
    this.dateRange = !dates.length ? this.defaultDateRange : dates;
  }

  // toggles between ascending and descending transaction order
  toggleSortOrder() {
    this.transAsc = !this.transAsc;
  }

  // computed value of all transactions for currently selected account
  get transactionsForAccount() {
    // if 'all', return all transactions unfiltered
    if (this.currentAccountId === 'all') {
      return this.allTransactions;
    }
    // or return all transactions with accountId same as selected
    return this.allTransactions.filter((transaction) => {
      return transaction.accountId === this.currentAccountId;
    });
  }

  // filter for transactions in current date range (inclusive)
  get transactionsInDateRange() {
    return this.transactionsForAccount.filter((transaction) => {
      const [start, end] = this.dateRange;
      const isInRange = moment(transaction.transactionDate).isBetween(start, end, 'days', '[]');
      return isInRange;
    });
  }

  // filter for transactions by selected categories
  get transactionsForCategories() {
    if (this.selectedCategories.length) {
      return this.transactionsInDateRange.filter((transaction) => {
        return !!this.selectedCategories.find((category) => {
          return category === transaction.category;
        });
      });
    }
    return this.transactionsInDateRange;
  }

  // all visible transactions sorted ascending/descending
  get currentTransactions() {
    return this.transactionsForCategories.slice().sort((a, b) => {
      return this.transAsc
        ? compareAsc(a.transactionDate, b.transactionDate)
        : compareDesc(a.transactionDate, b.transactionDate);
    });
  }

  // get chosen categories with count
  get currentCategories() {
    return this.allCategories.map((category, index) => {
      return {
        category,
        count: this.transactionsInDateRange.filter((transaction) => {
          return transaction.category === category;
        }).length,
        color: categoryColors[index],
      };
    });
  }

  // get current balance
  get currentBalance() {
    // if 'all', return total balances of all accounts
    if (this.currentAccountId === 'all') {
      return this.allAccounts.reduce((acc, cur) => {
        return acc + cur.balance;
      }, 0);
    }
    // or return current account's balance
    const currAccount = this.allAccounts.find((account) => {
      return account.accountId === this.currentAccountId;
    });
    return currAccount ? currAccount.balance : 0;
  }
}

decorate(AppStore, {
  loading: observable,
  apiError: observable,
  apiData: observable,
  allTransactions: observable,
  allAccounts: observable,
  allCategories: observable,
  currentAccountId: observable,
  selectedCategories: observable,
  transAsc: observable,
  dateRange: observable,

  fetchTransactions: action.bound,
  fetchAccounts: action.bound,
  fetchCategories: action.bound,
  setCurrentAccount: action.bound,
  setSelectedCategories: action.bound,
  setDateRange: action.bound,
  toggleSortOrder: action.bound,

  transactionsForAccount: computed,
  currentTransactions: computed,
  currentCategories: computed,
  currentBalance: computed,
});

export const store = new AppStore();
export const StoreContext = React.createContext(store);
