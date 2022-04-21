import styled from 'styled-components'
import { v4 } from 'uuid'

const filmDetailDataTable = [
  {
    property: 'Год производства',
    value: '2022',
  },
  {
    property: 'Страна',
    value: 'Россия',
  },
  {
    property: 'Жанр',
    value: 'Комедия',
  },
  {
    property: 'Слоган',
    value: '—',
  },
  {
    property: 'Режиссер',
    value: 'Никита Владимиров',
  },
  {
    property: 'Сценарий',
    value: 'Андрей Таратухин, Юлия Крутова',
  },
  {
    property: 'Продюсер',
    value: 'Никита Владимиров',
  },
  {
    property: 'Оператор',
    value: 'Сергей Астахов',
  },
  {
    property: 'Композитор',
    value: 'Федор Журавлев',
  },
  {
    property: 'Художник',
    value: 'Софья Матвеева',
  },
  {
    property: 'Монтаж',
    value: 'Ольга Гриншпун',
  },
  {
    property: 'Зрители',
    value: '66.3 тыс',
  },
  {
    property: 'Премьера в России',
    value: '14 апреля 2022',
  },
  {
    property: 'Возраст',
    value: '12+',
  },
  {
    property: 'Время',
    value: '19 мин. / 01:19',
  },
]

export default function FilmDetailTable() {
  return (
    <Container>
      <Title>О фильме</Title>
      <Table>
        {filmDetailDataTable.map((filmDataTable) => (
          <Row key={v4()}>
            <Property>{filmDataTable.property}</Property>
            <Value>{filmDataTable.value}</Value>
          </Row>
        ))}
      </Table>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
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
