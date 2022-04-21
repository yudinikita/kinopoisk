import styled from 'styled-components'
import { v4 } from 'uuid'
import type { TableAboutFilm } from 'mocks/types'

interface FilmDetailTableProps {
  table?: TableAboutFilm[]
}

export default function FilmDetailTable({ table }: FilmDetailTableProps) {
  if (table && table.length > 0) {
    return (
      <Container>
        <Title>О фильме</Title>
        <Table>
          {table.map((item) => (
            <Row key={v4()}>
              <Property>{item.property}</Property>
              <Value>{item.value}</Value>
            </Row>
          ))}
        </Table>
      </Container>
    )
  }

  return null
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 600px;
`

const Title = styled.h3`
  font-weight: 600;
  font-size: 24px;
  margin-top: 0;
  margin-bottom: 25px;
`

const Table = styled.div``

const Row = styled.div`
  display: flex;
  align-items: baseline;
  padding: 5px 0;

  &:not(&:last-child) {
    margin-bottom: 15px;
  }
`

const Property = styled.div`
  width: 190px;
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray5};
`

const Value = styled.div`
  flex: 1;
  font-weight: 400;
  font-size: 16px;
  color: white;
`
