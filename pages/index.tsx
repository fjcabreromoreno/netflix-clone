import { NextPageContext } from 'next';
import { getSession } from 'next-auth/react';
import Billboard from '../components/Billboard';
import MoviesList from '../components/MoviesList';
import Navbar from '../components/Navbar';
import useMovieList from '../hooks/uesMoviesList';

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: '/auth',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

export default function Home() {
  const { data: movies = [] } = useMovieList();

  return (
    <>
      <Navbar />
      <Billboard />
      <MoviesList title="Trending Now" data={movies} />
    </>
  );
}
