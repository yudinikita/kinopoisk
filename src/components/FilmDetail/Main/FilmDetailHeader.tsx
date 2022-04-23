import styled from 'styled-components'

interface FilmDetailHeaderProps {
  title?: string
  originalTitle?: string
  ratingAgeLimits?: string
}

export default function FilmDetailHeader({
  title = '',
  originalTitle = '',
  ratingAgeLimits = '',
}: FilmDetailHeaderProps) {
  return (
    <Container>
      {renderTitle(title)}
      <Captions>
        {renderOriginalTitle(originalTitle)}
        {renderAgeLimits(ratingAgeLimits)}
      </Captions>
    </Container>
  )
}

const renderTitle = (title?: string) => (title ? <Title>{title}</Title> : null)

const renderOriginalTitle = (originalTitle?: string) =>
  originalTitle ? <OriginalTitle>{originalTitle}</OriginalTitle> : null

const renderAgeLimits = (ratingAgeLimits?: string) =>
  ratingAgeLimits ? <RatingAgeLimits>{ratingAgeLimits}</RatingAgeLimits> : null

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 10px;
  width: 600px;

  @media (max-width: ${(props) => props.theme.space.lg}) {
    width: 100%;
  }
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

const RatingAgeLimits = styled.span`
  color: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(255, 255, 255, 0.6);
  padding: 1px 3px;
  font-size: 12px;
  font-weight: 600;
  line-height: 17px;
  border-radius: 5px;
  margin-left: 10px;
`
