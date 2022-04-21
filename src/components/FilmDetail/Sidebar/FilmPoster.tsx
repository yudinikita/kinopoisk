import Image from 'next/image'
import styled from 'styled-components'

export default function FilmPoster() {
  return (
    <Container>
      <PosterContainer>
        <FilmPosterImage
          src="/static/images/covers/05.jpg"
          layout="fill"
          objectFit="cover"
          alt="Обложка фильма"
        />
      </PosterContainer>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 25px;
`

const PosterContainer = styled.div`
  position: relative;
  min-height: 430px;
  background: rgba(230, 230, 230, 0.5);
  border-radius: ${(props) => props.theme.border.base};
`

const FilmPosterImage = styled(Image)`
  background: rgba(230, 230, 230, 0.5);
  display: block;
  overflow: hidden;
  width: 100%;
  min-width: 100%;
  min-height: 430px;
  white-space: nowrap;
  text-indent: 100%;
  border-radius: ${(props) => props.theme.border.base};
  -o-object-fit: cover;
  object-fit: cover;
`
