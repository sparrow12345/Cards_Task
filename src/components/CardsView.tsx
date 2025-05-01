// components/CardsView.tsx
'use client';
import { useEffect, useState, useRef } from 'react';
import Card from './Card';
import SkeletonCard from './SkeletonCard';
import Header from './Header';
import Footer from './Footer';
import { fetchCards } from '@/utils/fetchCards';
import { sortAndFormatCards } from '@/utils/sortCards';
import { cardPropsWithId } from '@/types/cardPropsWithId';
import { v4 as uuidv4 } from 'uuid';
// import { ClientPageRoot } from 'next/dist/client/components/client-page';

export default function CardsView() {
  const [cards, setCards] = useState<cardPropsWithId[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [disabled, setDisabled] = useState(false);
  const controllerRef = useRef<AbortController | null>(null);
  const requestIdRef = useRef<number>(0);

  const loadCards = async () => {
    if (controllerRef.current) {
      controllerRef.current.abort();
    }

    const controller = new AbortController();
    controllerRef.current = controller;

    const currentRequestId = ++requestIdRef.current; // increment to track current request

    setLoading(true);
    setError('');
    try {
      const data = await fetchCards(controller.signal);
      if (currentRequestId !== requestIdRef.current) {
        // An updated request has already started — ignore this result
        return;
      }

      // Defensive check
      if (!data || !Array.isArray(data)) {
        throw new Error('Invalid response structure');
      }


      const sorted = sortAndFormatCards(data);
      // console.log(sorted);
      const cardsWithIds = sorted.map(card => ({
        ...card,
        id: uuidv4(), // generate once and store
      }));
      // console.log(cardsWithIds);
      setCards(cardsWithIds);
      setDisabled(true);
      setTimeout(() => setDisabled(false), 3000);

    } catch (err: unknown) {
      if (err instanceof Error && err.name !== 'AbortError') {
        setError('Ошибка загрузки данных');
      }
    } finally {
      if (currentRequestId === requestIdRef.current) {
        setLoading(false); // Only reset loading if this was the last request
      }
    }
  };

  useEffect(() => {
    loadCards();
    return () => {
      controllerRef.current?.abort();
    };
  }, []);

  const handleRefresh = async () => {
    loadCards();
  };

  return (
    <>
      <Header onRefresh={handleRefresh} disabled={disabled} />
      <main className="min-h-screen pt-20 pb-12 flex flex-col items-center justify-center">
        {loading && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(7)].map((_, index) => <SkeletonCard key={index} />)}
          </div>
        )}
        {error && (
          <div className="text-center">
            <p className="text-red-500 mb-4">{error}</p>
            <button onClick={loadCards} className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded">
              Повторить
            </button>
          </div>
        )}
        {!loading && !error && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {cards.map((card: cardPropsWithId) => <Card key={card.id} data={{
              title: card.title,
              text: card.text
              }} />)}
          </div>
        )}
      </main>
      <Footer />
    </>
  );
}
