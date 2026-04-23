function twoSum(nums: number[], target: number): number[] {
  let map: Map<number, number> = new Map();

  for (let idx = 0; idx < nums.length; idx++) {
    const value = nums[idx];

    let need = target - value;

    if (map.has(need)) {
      return [map.get(need), idx];
    } else {
      map.set(value, idx);
    }
  }

  return [];
}

export {};
