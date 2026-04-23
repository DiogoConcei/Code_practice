function reverseOnlyLetters(s: string): string {
  const chars: string[] = s.split('');
  let left = 0;
  let right: number = chars.length - 1;
  const isAlpha = (str: string): boolean => /^[a-zA-Z]+$/.test(str);

  while (left < right) {
    if (isAlpha(chars[left]) && isAlpha(chars[right])) {
      [chars[left], chars[right]] = [chars[right], chars[left]];
      left += 1;
      right -= 1;
    } else if (isAlpha(chars[left])) {
      right -= 1;
    } else if (isAlpha(chars[right])) {
      left += 1;
    } else {
      left += 1;
      right -= 1;
    }
  }

  return chars.join('');
}

// Test cases
console.log(reverseOnlyLetters('ab-cd')); // Expected: "dc-ba"
console.log(reverseOnlyLetters('a-bC-dEf-ghIj')); // Expected: "j-Ih-gfE-dCba"
console.log(reverseOnlyLetters('Test1ng-Leet=code-Q!')); // Expected: "Qedo1ct-eeLg=ntse-T!"

export {};
