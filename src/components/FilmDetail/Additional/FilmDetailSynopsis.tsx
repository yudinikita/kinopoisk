import styled from 'styled-components'

interface FilmDetailSynopsisProps {
  desc?: string
}

export default function FilmDetailSynopsis({
  desc = '',
}: FilmDetailSynopsisProps) {
  return (
    <Container>
      <Title>Обзор</Title>
      <Synopsis>{desc}</Synopsis>
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

  @media (max-width: ${(props) => props.theme.space.md}) {
    font-size: 28px;
  }
`

const Synopsis = styled.p`
  margin: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 170%;
  flex: 1;
`
