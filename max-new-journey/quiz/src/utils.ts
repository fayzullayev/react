function shuffle(items: string[]): string[] {
  const copy = [...items];
  const len = copy.length;

  for (let i = 0; i < len; i++) {
    const random = Math.floor(Math.random() * len);
    const i = copy[random + 1];

    copy[random] = items[i];
  }
}

function shuffleStringArray(array: string[]): string[] {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}
