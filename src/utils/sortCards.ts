import { cardProps } from "@/types/cardProps";

export function sortAndFormatCards(data: cardProps[]) {
  const sorted = [...data].sort((a, b) => {
    if (!a.title && b.title) return 1;
    if (a.title && !b.title) return -1;
    if (!a.title && !b.title) return 0;
    const titleCompare = a.title.localeCompare(b.title);
    if (titleCompare !== 0) return titleCompare;
    return a.text.length - b.text.length;
  });
  const displayCards: cardProps[] = [];

  // Add first 7 cards or fewer if less than 7 available
  for (let i = 0; i < Math.min(7, sorted.length); i++) {
    displayCards.push(sorted[i]);
  }
  // Add placeholders if less than 7
  while (displayCards.length < 7) {
    displayCards.push({ title: '', text: '' });
  }
  
  return displayCards;
}
