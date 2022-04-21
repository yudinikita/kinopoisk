import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import FilmLayout from 'components/Layout/FilmDetail/FilmLayout'
import FilmDetailSidebar from 'components/FilmDetail/Sidebar/FilmDetailSidebar'
import FilmDetailMain from 'components/FilmDetail/Main/FilmDetailMain'
import FilmDetailAdditional from 'components/FilmDetail/Additional/FilmDetailAdditional'
import FilmDetailPlayer from 'components/FilmDetail/Player/FilmDetailPlayer'
import FilmCarouselSection from 'components/FilmCarousel/FilmCarouselSection'
import { loadFilms } from 'api/films'
import { filmsDetailList } from 'mocks/lists/filmsDetailList'
import { loadFilmDetail } from 'api/film'
import type { FilmCardProps } from 'components/FilmCard/FilmCard'
import type { FilmDetailResponse } from 'mocks/types'

interface FilmProps {
  filmDetailRes?: FilmDetailResponse
  similarFilms?: FilmCardProps[]
}

const Film: NextPage = ({ filmDetailRes, similarFilms = [] }: FilmProps) => {
  if (!filmDetailRes?.success) {
    if (filmDetailRes?.message) {
      console.error(filmDetailRes.message)
    }
  }

  const filmDetail = filmDetailRes?.data

  const metaInfo = {
    title: filmDetail?.nameRu,
    description: filmDetail?.shortDescription,
    keywords: `${filmDetail?.nameRu} — смотреть онлайн — Кинопоиск ${filmDetail?.nameOriginal} фильм сериал кино обои фотографии сеансы афиша обзор комментарии рейтинг факты отзывы кадры новости сайт`,
  }

  return (
    <FilmLayout
      meta={metaInfo}
      sidebar={<FilmDetailSidebar film={filmDetail} />}
      main={<FilmDetailMain film={filmDetail} />}
      additional={<FilmDetailAdditional desc={filmDetail?.description} />}
      player={<FilmDetailPlayer videoSrc={filmDetail?.videoPlayerUrl} />}
      similar={
        <FilmCarouselSection title="Похожие фильмы" slides={similarFilms} />
      }
    />
  )
}

export default Film

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = filmsDetailList.map((film) => ({ params: { id: film.id } }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const filmId = params?.id?.toString() ?? ''

  const filmDetailRes = await loadFilmDetail(filmId)
  const similarFilms = await loadFilms({ type: 'recommendation', count: '10' })

  return {
    props: {
      filmDetailRes,
      similarFilms,
    },
  }
}
