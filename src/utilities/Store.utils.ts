// Third-party imports
import { compareAsc, compareDesc } from 'date-fns';
import { action, computed, decorate, observable } from 'mobx';
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
  TransactionData,
  AccountData,
  CategoryData,
} from './Api.utils';

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
  allCategories: string[] = [];
  // current selected accountId
  currentAccountId = 'all';
  selectedCategories = [];
  transAsc = false;

  constructor() {
    this.fetchTransactions();
    this.fetchAccounts();
    this.fetchCategories();
    this.loading = false;
  }

  async init() {
    try {
      await Promise.all([this.fetchTransactions(), this.fetchAccounts(), this.fetchCategories()]);
    } catch (error) {
      this.apiError = error.message;
    }

    this.loading = false;
  }

  async fetchTransactions() {
    // const data = await getTransactions();
    const data = TransactionData;
    this.apiData.transactions = data;
    this.allTransactions = data.transactions.map((transaction) => {
      // coerse transaction.category into a string, was running into issues formatting without this
      return { ...transaction, category: `${transaction.category || ''}` };
    });
  }

  async fetchAccounts() {
    // const data = await getAccounts();
    const data = AccountData;
    this.apiData.accounts = data;
    this.allAccounts = data.accounts;
  }

  async fetchCategories() {
    // const data = await getCategories();
    const data = CategoryData;
    this.apiData.categories = data;
    this.allCategories = data.categories;
  }

  setCurrentAccount(accountId: string) {
    this.currentAccountId = accountId;
  }

  setSelectedCategories(categories: []) {
    this.selectedCategories = categories;
  }

  toggleSortOrder() {
    this.transAsc = !this.transAsc;
  }

  // computed value of all transactions for currently selected account
  get unsortedTransactions() {
    // if 'all', return all transactions unfiltered
    if (this.currentAccountId === 'all') {
      return this.allTransactions;
    }
    // or return all transactions with accountId same as selected
    return this.allTransactions.filter((transaction) => {
      return transaction.accountId === this.currentAccountId;
    });
  }

  get currentTransactions() {
    return this.filterByCategories(
      this.unsortedTransactions.slice().sort((a, b) => {
        return this.transAsc
          ? compareAsc(a.transactionDate, b.transactionDate)
          : compareDesc(a.transactionDate, b.transactionDate);
      }),
    );
  }

  get currentCategories() {
    return this.allCategories.map((category) => {
      return {
        category,
        count: this.unsortedTransactions.filter((transaction) => {
          return transaction.category === category;
        }).length,
      };
    });
  }

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

  filterByCategories(transactions: Transaction[]) {
    if (this.selectedCategories.length) {
      return transactions.filter((transaction) => {
        return !!this.selectedCategories.find((category) => {
          return category === transaction.category;
        });
      });
    }
    return transactions;
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

  fetchTransactions: action.bound,
  fetchAccounts: action.bound,
  fetchCategories: action.bound,
  setCurrentAccount: action.bound,
  setSelectedCategories: action.bound,
  toggleSortOrder: action.bound,

  unsortedTransactions: computed,
  currentTransactions: computed,
  currentCategories: computed,
  currentBalance: computed,
});

export const store = new AppStore();
export const StoreContext = React.createContext(store);
