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
  const response = await fetch(`http://demo1124891.mockable.io/transactions`);
  const data = (await response.json()) as TransactionsResponse;
  return data;
};
