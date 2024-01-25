import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import { SearchForm } from './components/SearchForm'
import { PriceHighLight, TransactionsContainer, TransactionsTable } from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm/>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="58%">Desenvolvimento do site</td>
              <td><PriceHighLight variant='income'>R$ 12.000,00</PriceHighLight></td>
              <td>Venda</td>
              <td>13/04/2024</td>
            </tr>
            <tr>
              <td width="58%">Hamburguer</td>
              <td><PriceHighLight variant='outcome'>- R$ 59,00</PriceHighLight></td>
              <td>Alimentação</td>
              <td>10/04/2024</td>
            </tr>
            {/* <tr>
              <td width="58%">Aluguel do apartamento</td>
              <td><PriceHighLight variant='outcome'>- R$ 1.200,00</PriceHighLight></td>
              <td>Casa</td>
              <td>27/03/2024</td>
            </tr>
            <tr>
              <td width="58%">R$ 5.400,00</td>
              <td><PriceHighLight variant='income'>R$ 5.400,00</PriceHighLight></td>
              <td>Venda</td>
              <td>13/03/2024</td>
            </tr>
            <tr>
              <td width="58%">Desenvolvimento do site</td>
              <td><PriceHighLight variant='income'>R$ 8.000,00</PriceHighLight></td>
              <td>Venda</td>
              <td>12/03/2024</td>
            </tr> */}
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
