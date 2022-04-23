import PromoSlider from 'components/PromoSlider/PromoSlider'
import FilmCarouselSection from 'components/FilmCarousel/FilmCarouselSection'
import { FilmCardProps } from 'components/FilmCard/FilmCard'
import { loadFilms } from 'api/films'
import { loadFilmDetail } from 'api/film'
import type { NextPage } from 'next'
import type { FilmDetailType } from 'mocks/types'

interface HomeProps {
  promoFilm?: FilmDetailType
  filmTickets?: FilmCardProps[]
  filmWatchNow?: FilmCardProps[]
  filmRecommendation?: FilmCardProps[]
}

const Home: NextPage = ({
  promoFilm,
  filmTickets = [],
  filmWatchNow = [],
  filmRecommendation = [],
}: HomeProps) => {
  return (
    <div>
      <PromoSlider
        title={promoFilm?.nameRu}
        desc={promoFilm?.shortDescription}
        cast={promoFilm?.actors?.join(', ')}
        url={'/film/' + promoFilm?.id}
      />
      <FilmCarouselSection title="Билеты в кино" slides={filmTickets} />
      <FilmCarouselSection title="Смотрят сейчас" slides={filmWatchNow} />
      <FilmCarouselSection title="Рекомендации" slides={filmRecommendation} />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  const promoFilm = await loadFilmDetail('01')

  const filmTickets = await loadFilms({ type: 'ticket', count: '10' })
  const filmWatchNow = await loadFilms({ type: 'watch_now', count: '10' })
  const filmRecommendation = await loadFilms({
    type: 'recommendation',
    count: '5',
  })

  return {
    props: {
      promoFilm: promoFilm.data,
      filmTickets,
      filmWatchNow,
      filmRecommendation,
    },
  }
}
