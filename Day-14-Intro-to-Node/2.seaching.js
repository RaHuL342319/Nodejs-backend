function linearSearch(arr, element) {
  for (let index = 0; index < arr.length; index++) {
    if (arr[index] == element) {
      return index;
    }
  }
  return NaN;
}

// Iterative function to implement Binary Search
function binarySearch(arr, x) {
    let start = 0,
        end = arr.length - 1;

    // Iterate while start not meets end
    while (start <= end) {
        // Find the mid index
        let mid = Math.floor((start + end) / 2);

        // If element is present at mid, return True
        if (arr[mid] === x) return mid;
        // Else look in left or right half accordingly
        else if (arr[mid] < x) start = mid + 1;
        else end = mid - 1;
    }

    return NaN;
}

module.exports = {
  Linear: linearSearch,
  binary: binarySearch,
};
