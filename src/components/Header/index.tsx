import { HeaderContainer, HeaderContent } from './styles'
import logoDTMoney from '../../assets/logo.svg'

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <img src={logoDTMoney} alt="" />
        <button>Nova transação</button>
      </HeaderContent>
    </HeaderContainer>
  )
}
