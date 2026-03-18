export function reverseWords(s: string): string {
  let l = 0,
    r = 0;

  let ans = s.split('');

  while (r <= ans.length) {
    if (r < ans.length && ans[r] !== ' ') {
      r++;
    } else {
      let prev_space = r - 1;

      while (l < prev_space) {
        let tmp = ans[prev_space];
        ans[prev_space] = ans[l];
        ans[l] = tmp;

        l++;
        prev_space--;
      }

      r++;
      l = r;
    }
  }

  return ans.join('');
}

const s = 'Mr Ding';
console.log(reverseWords(s)); // Saída: "rM gniD"
