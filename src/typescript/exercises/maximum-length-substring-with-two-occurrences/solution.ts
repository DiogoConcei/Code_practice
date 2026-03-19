function maximumLengthSubstring(s: string): number {
  let l = 0,
    r = 0;
  let max = 1;

  const window = new Map<string, number>();

  while (r < s.length) {
    if (window.has(s[r])) {
      let value = window.get(s[r]);
      window.set(s[r], ++value);
    } else {
      window.set(s[r], 1);
    }

    while (window.get(s[r]) === 3) {
      window.set(s[l], window.get(s[l]) - 1);
      l++;
    }

    max = Math.max(max, r - l + 1);
    r++;
  }

  return max;
}

let s = 'bcbbbcba';
console.log(maximumLengthSubstring(s));
