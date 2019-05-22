let testArr = [5, 9, 3, 7, 6, 4, 5, 2, 1, 8, 6, 2];

describe("Bubble Sort", function() {
  it("handles an empty array", function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it("returns an array", function() {
    expect(Array.isArray(bubbleSort([]))).toEqual(true);
  });
  it("returns a sorted array", function() {
    expect(bubbleSort(testArr)).toEqual([1, 2, 2, 3, 4, 5, 5, 6, 6, 7, 8, 9]);
  });
  it("does not mutate the array passed to it", function() {
    expect(testArr).toEqual([5, 9, 3, 7, 6, 4, 5, 2, 1, 8, 6, 2]);
  });
});
