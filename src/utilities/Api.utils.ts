interface Transaction {
  accountId: string;
  transactionDate: string;
  description: string;
  amount: number;
  withdrawal: number;
  runningBalance: number;
  category: string;
  transactionId: string;
}

export interface TransactionsResponse {
  earliestTransactionDate: string;
  latestTransactionDate: string;
  daysSpanByTransaction: number;
  transactionCount: number;
  transactions: Transaction[];
}

export const getTransactions = async () => {
  const response = await fetch(`https://demo1124891.mockable.io/transactions`);
  const data = (await response.json()) as TransactionsResponse;
  return data;
};

interface Account {
  accountId: string;
  institutionName: string;
  accountName: string;
  transitNumber: string;
  accountNumber: string;
  balance: number;
  balanceUpdated: string;
}

interface AccountsResponse {
  accounts: Account[];
}

export const getAccounts = async () => {
  const response = await fetch(`https://demo1124891.mockable.io/accounts`);
  const data = (await response.json()) as AccountsResponse;
  return data;
};

interface CategoriesResponse {
  categories: string[];
}

export const getCategories = async () => {
  const response = await fetch(`https://demo1124891.mockable.io/categories`);
  const data = (await response.json()) as CategoriesResponse;
  return data;
};
