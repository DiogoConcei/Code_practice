function intersection(nums1: number[], nums2: number[]): number[] {
  let set1 = new Set<number>();
  let seen = new Set<number>();

  for (let idx = 0; idx < nums1.length; idx++) {
    set1.add(nums1[idx]);
  }

  for (let idx = 0; idx < nums2.length; idx++) {
    if (set1.has(nums2[idx])) {
      seen.add(nums2[idx]);
    }
  }

  return Array.from(seen);
}

let nums1 = [1, 2, 2, 1],
  nums2 = [2, 2];

console.log(intersection(nums1, nums2));
