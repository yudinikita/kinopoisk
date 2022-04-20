import Link from 'next/link'
import styled from 'styled-components'

export default function Custom404() {
  return (
    <div>
      <Title>404. Страница не найдена</Title>
      <Desc>
        Возможно, она была перемещена, или вы просто неверно указали адрес
        страницы.
      </Desc>
      <br />
      <Link href="/" passHref>
        <LinkToHome>Перейти на главную</LinkToHome>
      </Link>
    </div>
  )
}

const Title = styled.h1`
  text-align: center;
  font-size: 48px;
`

const Desc = styled.p`
  font-size: 26px;
  text-align: center;
  color: ${(props) => props.theme.colors.gray4};
`

const LinkToHome = styled.button`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 22px;
  padding: 30px;
  color: ${(props) => props.theme.colors.brand};
  border-radius: ${(props) => props.theme.border.base};
  border: 2px solid ${(props) => props.theme.colors.brand};
  background-color: transparent;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    color: white;
    background-color: ${(props) => props.theme.colors.brand};
  }
`
