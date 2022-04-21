import styled from 'styled-components'
import { v4 } from 'uuid'

interface FilmDetailActorsProps {
  actors?: string[]
}

export default function FilmDetailActors({ actors }: FilmDetailActorsProps) {
  if (actors && actors.length > 0) {
    return (
      <Container>
        <Title>В главных ролях</Title>
        <List>
          {actors.map((actor) => (
            <Item key={v4()}>{actor}</Item>
          ))}
        </List>
      </Container>
    )
  }

  return null
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
