import styled from 'styled-components'
import FilmDetailFriends from 'components/FilmDetail/Additional/FilmDetailFriends'
import FilmDetailSynopsis from 'components/FilmDetail/Additional/FilmDetailSynopsis'

interface FilmDetailAdditionalProps {
  desc?: string
}

export default function FilmDetailAdditional({
  desc,
}: FilmDetailAdditionalProps) {
  return (
    <Container>
      <Column>
        <FilmDetailSynopsis desc={desc} />
      </Column>
      <Column>
        <FriendsContainer>
          <FilmDetailFriends />
        </FriendsContainer>
      </Column>
    </Container>
  )
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 0.3fr;
  margin-top: 50px;

  @media (max-width: ${(props) => props.theme.space.xl}) {
    grid-template-columns: 1fr;
  }
`

const Column = styled.div`
  display: flex;
  flex-direction: column;
`

const FriendsContainer = styled.div`
  @media (max-width: ${(props) => props.theme.space.xl}) {
    display: none;
  }
`
