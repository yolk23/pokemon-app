function permute(nums) {
  const result = [];

  function backtrack(current) {
    if (current.length === nums.length) {
      result.push(current.slice()); // Make a copy of current to avoid reference issues
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (!current.includes(nums[i])) {
        current.push(nums[i]);
        backtrack(current);
        current.pop();
      }
    }
  }

  backtrack([]);

  console.log(result);
}

permute([1, 2, 3]);
