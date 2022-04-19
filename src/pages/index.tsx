import type { NextPage } from 'next'
import PromoSlider from 'components/PromoSlider/PromoSlider'
import FilmCarouselSection from 'components/FilmCarousel/FilmCarouselSection'
import { FilmCardProps } from 'components/FilmCard/FilmCard'
import { loadFilms } from 'api/films'

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

export async function getServerSideProps() {
  const filmTickets = await loadFilms({ type: 'ticket', count: '10' })
  const filmWatchNow = await loadFilms({ type: 'watch_now', count: '10' })
  const filmRecommendation = await loadFilms({
    type: 'recommendation',
    count: '5',
  })

  return {
    props: {
      filmTickets,
      filmWatchNow,
      filmRecommendation,
    },
  }
}
