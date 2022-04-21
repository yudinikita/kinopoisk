import styled from 'styled-components'

export default function FilmDetailHeader() {
  return (
    <Container>
      <Title>Я могу уничтожить тебя (сериал 2020 - ...</Title>
      <Captions>
        <OriginalTitle>I May Destroy You</OriginalTitle>
        <SmallAge>18+</SmallAge>
      </Captions>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 600px;
`

const Title = styled.h1`
  font-weight: 700;
  font-size: 44px;
  margin-top: 0;
  margin-bottom: 20px;
  overflow-wrap: break-word;
`

const Captions = styled.div`
  display: flex;
  color: ${(props) => props.theme.colors.gray5};
`

const OriginalTitle = styled.span`
  font-weight: 400;
  font-size: 18px;
`

const SmallAge = styled.span`
  color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.6);
  padding: 1px 3px;
  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
  border-radius: 5px;
  margin-left: 10px;
`
