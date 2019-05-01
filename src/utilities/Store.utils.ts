// Third-party imports
import { decorate, observable, action, computed } from 'mobx';

// Local imports
import { TransactionsResponse, Transaction, getTransactions } from './Api.utils';

export class AppStore {
  // loading state of application
  loading = true;
  // most recent error from api
  apiError = '';
  // raw data fetched from api
  apiData: {
    transactions?: TransactionsResponse;
  } = {};
  // all transactions in the app
  allTransactions: Transaction[] = [];
  // current selected accountId
  currentAccountId = 'all';

  async init() {
    try {
      await Promise.all([this.fetchTransactions()]);
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
  currentAccountId: observable,

  fetchTransactions: action.bound,

  currentTransactions: computed,
});
