import Link from 'next/link'
import styled from 'styled-components'
import { v4 } from 'uuid'

const tabs = [
  {
    name: 'Награды',
    href: '#',
  },
  {
    name: 'Премьеры',
    href: '#',
  },
  {
    name: 'Изображения',
    href: '#',
  },
  {
    name: 'Трейлеры',
    href: '#',
  },
  {
    name: 'Студии',
    href: '#',
  },
  {
    name: 'Еще...',
    href: '#',
  },
]

export default function FilmDetailTabs() {
  const renderTabs = () =>
    tabs && tabs.length > 0 ? (
      <List>
        {tabs.map((tab) => (
          <Item key={v4()}>
            <Link href={tab.href}>
              <a>{tab.name}</a>
            </Link>
          </Item>
        ))}
      </List>
    ) : null

  return (
    <Container>
      <Title>Детали</Title>
      {renderTabs()}
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 70px;
`

const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: white;
  margin-bottom: 15px;
`

const List = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
`

const Item = styled.li`
  padding: 10px 0;
  flex: 1;
`
