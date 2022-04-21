import styled from 'styled-components'

export default function FilmDetailRating() {
  return (
    <Container>
      <Value>6.0</Value>
      <Count>320 оценок</Count>
      <RateBtn>Оценить</RateBtn>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Value = styled.span`
  font-weight: 700;
  font-size: 34px;
  margin-bottom: 5px;
  color: ${(props) => props.theme.colors.gray3};
`

const Count = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray5};
  margin-bottom: 20px;
`

const RateBtn = styled.button`
  font-weight: 500;
  font-size: 16px;
  border: 0;
  padding: 12px 45px;
  margin: 0;
  border-radius: 50px;
  background-color: ${(props) => props.theme.colors.gray5};
  cursor: pointer;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: ${(props) => props.theme.colors.gray6};
  }

  &:active {
    transform: scale(0.95);
  }
`
