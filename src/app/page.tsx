import Head from 'next/head';
import CardsView from '@/components/CardsView';

export default function Home() {
  return (
    <>
      <Head>
        <title>Карточки</title>
      </Head>
      <CardsView />
    </>
  );
}