import PromoSlider from 'components/PromoSlider/PromoSlider'
import styled from 'styled-components'

export default function FilmDetailPlayer() {
  return (
    <Container>
      <PromoSlider />
    </Container>
  )
}

const Container = styled.div`
  margin-top: 50px;
`
