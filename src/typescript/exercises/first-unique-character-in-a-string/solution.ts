function firstUniqChar(s: string): number {
  const d = new Map<string, [number, number]>();

  for (let i = 0; i < s.length; i++) {
    const ch = s[i];
    const data = d.get(ch);

    if (!data) {
      d.set(ch, [i, 1]);
    } else {
      data[1] += 1;
    }
  }

  for (const [_, [idx, count]] of d.entries()) {
    if (count === 1) {
      return idx;
    }
  }

  return -1;
}

export {};
