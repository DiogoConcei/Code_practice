function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map: Map<number, number> = new Map();

  for (let idx = 0; idx < nums.length; idx++) {
    const value = nums[idx];
    const lastIndex = map.get(value);

    if (idx - lastIndex <= k) {
      return true;
    }

    map.set(value, idx);
  }

  return false;
}
