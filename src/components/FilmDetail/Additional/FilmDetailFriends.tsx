import styled from 'styled-components'

export default function FilmDetailFriends() {
  return (
    <Container>
      <Title>Друзья</Title>
      <NotFound>Пока никто из друзей не оценил этот фильм...</NotFound>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`

const Title = styled.div`
  font-weight: 500;
  font-size: 24px;
  color: white;
  margin-bottom: 20px;
`

const NotFound = styled.div`
  font-weight: 400;
  font-size: 16px;
  line-height: 170%;
`
