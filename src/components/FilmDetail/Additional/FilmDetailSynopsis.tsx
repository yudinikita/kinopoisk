import styled from 'styled-components'

export default function FilmDetailSynopsis() {
  return (
    <Container>
      <Title>Обзор</Title>
      <Synopsis>
        Два искателя приключений Нейтан Дрейк и Виктор Салливан по прозвищу
        Салли отправляются на поиски величайшего сокровища мира. Кроме того, они
        надеются найти улики, которые приведут их к давно потерянному брату
        Нейтана.
      </Synopsis>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 930px;
`

const Title = styled.h3`
  margin: 0;
  margin-bottom: 20px;
  font-weight: 500;
  font-size: 44px;
`

const Synopsis = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  flex: 1;
`
