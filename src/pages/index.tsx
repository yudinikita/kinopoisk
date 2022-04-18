import type { NextPage } from 'next'
import PromoSlider from 'components/PromoSlider/PromoSlider'
import FilmCarouselSection from 'components/FilmCarousel/FilmCarouselSection'

const Home: NextPage = () => {
  return (
    <div>
      <PromoSlider />
      <FilmCarouselSection title="Билеты в кино" slides={[]} />
    </div>
  )
}

export default Home
