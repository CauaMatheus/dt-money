import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface Transaction  {
  id: number;
  title: string;
  amount: number;
  type: 'deposit' | 'withdraw';
  category: string;
  createdAt: string;
}

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface TransactionContextData {
  transactions: Transaction[],
  createTransactions(transaction: TransactionInput): Promise<void> 
}

export const TransactionsContext = createContext<TransactionContextData>(
  {} as TransactionContextData
);

export const TransactionsContextProvider: React.FC = ({children}) => {
  const [transactions, setTransactions] = useState<Transaction[]>([]);
  
  async function createTransactions(transaction: TransactionInput) {
    const { data } = await api.post('/transactions', transaction)
    const { transaction: createdTransaction } = data

    setTransactions((transactions) => {
      return [...transactions, createdTransaction]
    })
  }

  useEffect(() => {
    api.get('/transactions').then(response => setTransactions(response.data.transactions))
  }, []);

  return (
    <TransactionsContext.Provider value={{
      transactions,
      createTransactions
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)
  return context
}