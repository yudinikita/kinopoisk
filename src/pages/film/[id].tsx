import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { listFilms } from 'mocks/lists/filmsList'

interface FilmProps {
  paramsId?: string
}

const Film: NextPage = ({ paramsId }: FilmProps) => {
  return <div>Film Page #{paramsId}</div>
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
  return {
    props: {
      paramsId: params?.id ?? '',
    },
  }
}
