// Highest ELements of an Array
function maxInArray(heights) {
  let highestHeights = heights[0];
  for (let i = 0; i < heights.length; i++) {
    const heightElements = heights[i];
    if (highestHeights < heightElements) {
      highestHeights = heightElements;
    }
  }
  return highestHeights;
}

const heightsArray = [167, 190, 220, 165, 237];
const tallest = maxInArray(heightsArray);
console.log(tallest);

// Lowest ELements of an Array
function minInArray(heights) {
  let lowestHeights = heights[0];
  for (let i = 0; i < heights.length; i++) {
    const allHeights = heights[i];
    if (allHeights < lowestHeights) {
      lowestHeights = allHeights;
    }
  }
  return lowestHeights;
}

const heightsArray2 = [167, 190, 220, 165, 237];
const shortest = minInArray(heightsArray2);
console.log(shortest);
