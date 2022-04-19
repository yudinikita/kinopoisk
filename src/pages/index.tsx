import type { NextPage } from 'next'
import PromoSlider from 'components/PromoSlider/PromoSlider'
import FilmCarouselSection from 'components/FilmCarousel/FilmCarouselSection'
import { FilmCardProps } from 'components/FilmCard/FilmCard'
import * as filmsApi from 'api/films'

interface HomeProps {
  filmTickets?: FilmCardProps[]
  filmWatchNow?: FilmCardProps[]
  filmRecommendation?: FilmCardProps[]
}

const Home: NextPage = ({
  filmTickets = [],
  filmWatchNow = [],
  filmRecommendation = [],
}: HomeProps) => {
  return (
    <div>
      <PromoSlider />
      <FilmCarouselSection title="Билеты в кино" slides={filmTickets} />
      <FilmCarouselSection title="Смотрят сейчас" slides={filmWatchNow} />
      <FilmCarouselSection title="Рекомендации" slides={filmRecommendation} />
    </div>
  )
}

export default Home

export async function getStaticProps() {
  let filmTickets: object = []
  let filmWatchNow: object = []
  let filmRecommendation: object = []

  await filmsApi
    .list({ type: 'ticket' })
    .then((data) => (filmTickets = data.films))

  await filmsApi
    .list({ type: 'watch_now' })
    .then((data) => (filmWatchNow = data.films))

  await filmsApi
    .list({ type: 'recommendation', count: 5 })
    .then((data) => (filmRecommendation = data.films))

  return {
    props: {
      filmTickets,
      filmWatchNow,
      filmRecommendation,
    },
  }
}
