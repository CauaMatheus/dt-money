import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'

import Modal from "react-modal";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";
import { FormEvent, useState } from 'react';
import { useTransactions } from '../../hooks/useTransactions';

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose(): void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [type, setType] = useState<'deposit'| 'withdraw'>('deposit')
  const [title, setTitle] = useState('');
  const [amount, setAmount] = useState<number|undefined>(0);
  const [category, setCategory] = useState('');

  const { createTransactions } = useTransactions()

  async function handleCreateNewTransaction(event: FormEvent) {
    event.preventDefault();

    if(!title || !amount || !category) {
      return
    }

    await createTransactions({
      title,
      amount,
      category,
      type
    })

    setType('deposit')
    setTitle('')
    setAmount(undefined)
    setCategory('')

    onRequestClose()
  }

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <button type="button" onClick={onRequestClose} className="react-modal-close">
        <img src={closeImg} alt="Fechar modal"/>
      </button>
      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar transação</h2>
        <input 
          type="text" 
          placeholder="Título"
          onChange={(event) => setTitle(event.target.value)}
          value={title}
        />
        <input 
          type="number" 
          placeholder="Valor"
          onChange={(event) => setAmount(Number(event.target.value))}
          value={amount}
        />

        <TransactionTypeContainer>
          <RadioBox 
            type="button" 
            onClick={() => setType('deposit')}
            isActive={type === 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>
          <RadioBox 
            type="button" 
            onClick={() => setType('withdraw')}
            isActive={type === 'withdraw'}
            activeColor="red"
          >
            <img src={outcomeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>

        <input 
          type="text" 
          placeholder="Categoria"
          onChange={(event) => setCategory(event.target.value)}
          value={category}
        />
        <button type="submit">Cadastrar</button>
      </Container>
    </Modal>
  )
}