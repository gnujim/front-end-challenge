// Third-party imports
import { action, computed, decorate, observable } from 'mobx';

// Local imports
import {
  Account,
  AccountsResponse,
  getAccounts,
  getTransactions,
  Transaction,
  TransactionsResponse,
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
  } = {};
  // all transactions in the app
  allTransactions: Transaction[] = [];
  // all accounts in the app
  allAccounts: Account[] = [];
  // current selected accountId
  currentAccountId = 'all';

  async init() {
    try {
      await Promise.all([this.fetchTransactions(), this.fetchAccounts()]);
    } catch (error) {
      this.apiError = error.message;
    }
    this.loading = false;
  }

  async fetchTransactions() {
    const data = await getTransactions();
    this.apiData.transactions = data;
    this.allTransactions = data.transactions;
  }

  async fetchAccounts() {
    const data = await getAccounts();
    this.apiData.accounts = data;
    this.allAccounts = data.accounts;
  }

  // computed value of all transactions for currently selected account
  get currentTransactions() {
    // if 'all', return all transactions unfiltered
    if (this.currentAccountId === 'all') {
      return this.allTransactions;
    }
    // or return all transactions with accountId same as selected
    return this.allTransactions.filter((transaction) => {
      return transaction.accountId === this.currentAccountId;
    });
  }
}

decorate(AppStore, {
  loading: observable,
  apiError: observable,
  apiData: observable,
  allTransactions: observable,
  allAccounts: observable,
  currentAccountId: observable,

  fetchTransactions: action.bound,
  fetchAccounts: action.bound,

  currentTransactions: computed,
});
