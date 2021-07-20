import styled from "styled-components";
import { darken, transparentize } from 'polished';

export const Container = styled.form`
  display: flex;
  flex-direction: column;

  h2 {
    color: var(--text-title);
    margin-bottom: 2rem;
    font-size: 1.5rem;
  }

  input {
    width: 100%;
    height: 4rem;
    padding: 0 1.5rem;
    border-radius: 0.25rem;

    border: 1px solid #D7D7D7;
    background: #E7E9EE;

    font-weight: 400;
    font-size: 1rem;

    &::placeholder {
      color: var(--text-body);
    }

    & + input {
      margin-top: 1rem;
    }
  }

  button[type="submit"] {
    height: 4rem;
    padding: 0 1.5rem;
    background: var(--green);
    border: 0;
    border-radius: 0.25rem;

    font-size: 1rem;
    font-weight: 600;
    color: #FFF;

    margin-top: 1.5rem;

    transition: filter 0.2s;
    &:hover {
      filter: brightness(0.9);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
  margin: 1rem 0;
`

interface RadioBoxProps {
  isActive: boolean
  activeColor: 'green' | 'red'
}

const colors = {
  green: '#33CC95',
  red: '#E52E4D'
}

export const RadioBox = styled.button<RadioBoxProps>`
  width: 100%;
  height: 4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 1.5rem;

  border-radius: 0.25rem;
  border: 1px solid #D7D7D7;
  background: ${(props) => props.isActive ? transparentize(0.9, colors[props.activeColor]): 'transparent'};

  transition: border-color 0.2s;

  &:hover {
    border-color: ${darken(0.1, '#d7d7d7')};
  }

  img {
    width: 28px;
    height: 28px;
  }

  span {
    display: inline-block;
    font-size: 1rem;
    color: var(--text-title);
    margin-left: 1rem;
  }
`