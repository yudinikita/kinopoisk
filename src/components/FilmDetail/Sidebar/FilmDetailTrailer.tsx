import Image from 'next/image'
import styled from 'styled-components'

interface FilmTrailerProps {
  trailerCoverUrl?: string
  filmTitle?: string
  trailerLength?: string
  trailerDate?: string
}

export default function FilmDetailTrailer({
  trailerCoverUrl = '',
  filmTitle = '',
  trailerLength = '',
  trailerDate = '',
}: FilmTrailerProps) {
  return (
    <Container>
      <PosterContainer>
        <TrailerWrapper>
          <TrailerPoster
            src={trailerCoverUrl}
            layout="fill"
            objectFit="cover"
            alt={`Трейлер ${filmTitle}`}
          />
        </TrailerWrapper>
        <TrailerWatchBtn>
          <WatchBtnIcon
            width="10"
            height="12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.63 7.131c-.056.058-.27.306-.468.51-1.165 1.283-4.204 3.383-5.795 4.024-.242.103-.853.321-1.179.335-.313 0-.61-.072-.895-.218a1.874 1.874 0 0 1-.795-.904c-.1-.263-.256-1.05-.256-1.064C.086 8.953 0 7.554 0 6.008c0-1.473.086-2.815.213-3.689.015-.014.17-.992.341-1.327A1.785 1.785 0 0 1 2.132 0h.056c.426.015 1.321.395 1.321.409 1.505.642 4.474 2.639 5.668 3.966 0 0 .336.341.482.554.228.306.341.685.341 1.064 0 .423-.128.817-.37 1.138Z"
              fill="#fff"
            />
          </WatchBtnIcon>
          Трейлер
        </TrailerWatchBtn>
        <TrailerTime>{trailerLength}</TrailerTime>
      </PosterContainer>
      <Captions>
        <Title>Трейлер</Title>
        <Date>{trailerDate}</Date>
      </Captions>
    </Container>
  )
}

const Container = styled.div`
  margin-bottom: 30px;
`

const PosterContainer = styled.div`
  position: relative;
  min-height: 170px;
  background: rgba(230, 230, 230, 0.5);
  border-radius: ${(props) => props.theme.border.base};
`

const TrailerPoster = styled(Image)`
  background: rgba(230, 230, 230, 0.5);
  display: block;
  overflow: hidden;
  width: 100%;
  min-width: 100%;
  min-height: 170px;
  white-space: nowrap;
  text-indent: 100%;
  border-radius: ${(props) => props.theme.border.base};
  -o-object-fit: cover;
  object-fit: cover;
`

const TrailerWrapper = styled.button`
  padding: 0;
  margin: 0;
  border: 0;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.gray5};
`

const WatchBtnIcon = styled.svg`
  margin-right: 10px;
`

const TrailerWatchBtn = styled.button`
  position: absolute;
  bottom: 10px;
  left: 10px;
  display: flex;
  align-items: center;
  padding: 10px 15px;
  margin: 0;
  background-color: ${(props) => props.theme.colors.brand};
  border: 0;
  border-radius: ${(props) => props.theme.border.base};
  font-size: 16px;
  cursor: pointer;
  color: white;
`

const TrailerTime = styled.div`
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  align-items: center;
  padding: 3px;
  margin: 0;
  background-color: rgba(40, 40, 40, 0.8);
  border-radius: 5px;
  font-size: 12px;
  cursor: pointer;
  color: white;
`

const Captions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
`

const Title = styled.p`
  font-weight: 400;
  font-size: 18px;
  margin-top: 15px;
  margin-bottom: 10px;
`

const Date = styled.span`
  font-weight: 400;
  font-size: 16px;
  color: ${(props) => props.theme.colors.gray5};
`
