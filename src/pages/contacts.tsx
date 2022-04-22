import { NextPage } from 'next'
import Link from 'next/link'
import styled from 'styled-components'

const Contacts: NextPage = () => {
  return (
    <div>
      <Title>Обратная связь</Title>
      <Desc>
        По всем вопросам пишите на почту{' '}
        <Link href="mailto:nikitayudin782@gmail.com" passHref>
          <MailLink>nikitayudin782@gmail.com</MailLink>
        </Link>
      </Desc>
    </div>
  )
}

export default Contacts

const Title = styled.h1`
  margin: 0;
  margin-bottom: 30px;
  font-weight: 500;
  font-size: 44px;
`

const Desc = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 24px;
`

const MailLink = styled.a`
  text-decoration: underline;
`
