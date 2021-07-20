import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'

import { Container } from "./styles";

export function Summary() {
  return (
    <Container>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="entradas" />
        </header>
        <strong>R$ 1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saídas</p>
          <img src={outcomeImg} alt="entradas" />
        </header>
        <strong>- R$ 500,00</strong>
      </div>
      <div className="highlighted">
        <header>
          <p>Total</p>
          <img src={totalImg} alt="entradas" />
        </header>
        <strong>R$ 500,00</strong>
      </div>
    </Container>
  )
}