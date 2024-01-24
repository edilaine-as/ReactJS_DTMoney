import { styled } from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme['gray-900']};
  padding: 2.5rem 0 7.5rem 0;
`

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    height: 50px;
    padding: 0 1.25rem;

    border: 0;
    border-radius: 6px;

    background-color: ${(props) => props.theme['green-500']};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme['green-700']};
      transition: background-color 0.2s;
    }
  }
`
