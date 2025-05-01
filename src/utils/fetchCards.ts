import { cardProps } from '../types/cardProps';

export async function fetchCards(signal: AbortSignal): Promise<cardProps[]> {
  const res = await fetch('https://node-test-server-production.up.railway.app/api/cards/', { signal });
  if (!res.ok) throw new Error('Failed to fetch cards');

  // ✅ Await the response to get the actual JSON object
  const data = await res.json();

  // ✅ Defensive check in case structure isn't as expected
  if (!Array.isArray(data.cards)) {
    throw new Error('Invalid response structure');
  }

  // console.log(data.cards);
  // ✅ Normalize casing to ensure consistent use of `Title` and `Text`
  const rawCards: cardProps[] = data.cards.map((card: cardProps) => ({
    title: card.title,
    text: card.text
  }));

  return rawCards;
}
