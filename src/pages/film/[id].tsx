import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { listFilms } from 'mocks/lists/filmsList'
import FilmLayout from 'components/Layout/FilmDetail/FilmLayout'
import FilmDetailSidebar from 'components/FilmDetail/Sidebar/FilmDetailSidebar'
import FilmDetailMain from 'components/FilmDetail/Main/FilmDetailMain'
import FilmDetailAdditional from 'components/FilmDetail/Additional/FilmDetailAdditional'
import FilmDetailPlayer from 'components/FilmDetail/Player/FilmDetailPlayer'
import FilmCarouselSection from 'components/FilmCarousel/FilmCarouselSection'
import { loadFilms } from 'api/films'
import type { FilmCardProps } from 'components/FilmCard/FilmCard'

interface FilmProps {
  paramsId?: string
  similarFilms?: FilmCardProps[]
}

const Film: NextPage = ({ paramsId, similarFilms }: FilmProps) => {
  return (
    <FilmLayout
      meta={{
        title: 'Название фильма #' + paramsId,
      }}
      sidebar={<FilmDetailSidebar />}
      main={<FilmDetailMain />}
      additional={<FilmDetailAdditional />}
      player={<FilmDetailPlayer />}
      similar={
        <FilmCarouselSection
          title="Похожие фильмы"
          slides={similarFilms ?? []}
        />
      }
    />
  )
}

export default Film

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = listFilms.map((film) => ({ params: { id: film.id } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const similarFilms = await loadFilms({ type: 'recommendation', count: '10' })

  return {
    props: {
      paramsId: params?.id ?? '',
      similarFilms,
    },
  }
}
