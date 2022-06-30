// Given an array of length n, where each element represents a stack of boxes.
// You are asked to remove boxes with the constraints that, you can start from any index moving left to right, you can not skip an element, and every stack of boxes you take must be greater than the last.
// Example:
// Input - [7, 4, 5, 2, 6, 5]

const { defaultFieldResolver } = require("graphql");

// some valid attempts.
// indices 0 -> 2  removing 3, 4, and 5 for 12
// indices 2 -> 5 removing 1, 2, 4, and 5 for 12
// indices 3 -> 5 removing 2, 4, and 5 for 11

// invalid attempts.
// indices 3 -> 5 removing 2, 6, and 5 for 13 (cannot decrease boxes taken on subsequent indices)
// indices 0 -> 5 removing 1, 1, 1, 2, 4, and 5 for 14 (each subsequent index take must be greater than, not equal.)

function solution(array) {}

// console.log(solution([7, 4, 5, 2, 6, 5]))  //expect 12
// console.log(solution([2, 4, 5, 2, 6, 5]))  //expect 12
// console.log(solution([100, 4, 5, 2, 6, 5]))  //expect 100

// Write a function that returns the nearest restaurant locations. Locations are given as an array of arrays, and each array contains an x and y coordinate.
// Distance is calculated from the square root of x2 + y2. You may assume that you start at the origin [0, 0]. You are given three inputs:

// totalRestaurants: Total number of restaurants (N)
// allLocations: Location of restaurants (x, y coordinates) (e.g. [ [1, 2], [1, 1], [3, 1] ])
// numLocations: Number of nearest locations to return (X)

// This function should output an array of arrays with the nearest locations. If multiple locations are the same distance,
// you may return any location as long as you return X locations (where X = numLocations).

// Example: 	Input:	    Output:
// totalRestaurants = 3	    [[1, -1], [1, 2]]
// allLocations = [[1, 2], [3, 4], [1, -1]]
// numRestaurants = 2

//Time: O(m + nlogn) or O(2nlogn) => O(nlogn);
//Space: O(n)
function restaurant(totalRestaurants, allLocations, numLocations) {
  const sortedRestaurants = [];
  const output = [];
  //Time: O(n) = totalRestaurants
  for (let i = 0; i < totalRestaurants; i++) {
    const [x, y] = allLocations[i];
    const distance = Math.sqrt(x ^ (2 + y) ^ 2);
    sortedRestaurants.push([x, y, distance]);
  }
  //Time: O(nlogn) = totalRestaurants
  sortedRestaurants.sort((a, b) => a[2] - b[2]);

  //Time: O(m) = numLocations (worst case = totalResutants)
  for (let i = 0; i < numLocations; i++) {
    output.push([sortedRestaurants[i][0], sortedRestaurants[i][1]]);
  }

  return output;
}

////use Heap - https://stackoverflow.com/questions/54528283/find-the-nearest-restaurant-given-locations

console.log(
  restaurant(
    3,
    [
      [1, 2],
      [3, 4],
      [1, -1],
    ],
    2
  )
); //[[1, -1], [1, 2]]

// Write a function that determines the most optimal route (must go forwards AND backwards) that does not exceed a maximum distance.
// Optimal in this case is defined as the route that gets as close to maxDistance as possible without exceeding it.
// Each route is an array broken up into two values: 1) a route number, and 2) a distance in miles (e.g. [1, 5000]). You are given three inputs:

// maxDistance: Maximum total distance allowed (e.g. 10000 miles)
// forwardRoutes: Forward routes (e.g. [ [1, 8000], [2, 6000], [3, 4000] ])
// returnRoutes: Return routes (e.g. [ [1, 2000], [2, 3000] ])

// This function should output an array of arrays that contains the most optimal routes. For example, based on the input given above,
// the most optimal route would be forward route 1, and return route 1 since it does not exceed the maximum distance of 10000 miles.
// Therefore, the output would be [ [1, 1] ]. It is possible for multiple routes to have the same maximum possible distance.
// If this is the case, then include all of them in the output.

function route(maxDistance, forwardRoutes, returnRoutes) {
  const output = [];
  let distance = 0;
  for (let i = 0; i < forwardRoutes.length; i++) {
    for (let j = 0; j < returnRoutes.length; j++) {
      if (forwardRoutes[i][1] + returnRoutes[j][1] === maxDistance) {
        distance = maxDistance;
        break;
      } else {
        if (
          forwardRoutes[i][1] + returnRoutes[j][1] > distance &&
          forwardRoutes[i][1] + returnRoutes[j][1] < maxDistance
        ) {
          distance = forwardRoutes[i][1] + returnRoutes[j][1];
        }
      }
    }
  }

  for (let i = 0; i < forwardRoutes.length; i++) {
    for (let j = 0; j < returnRoutes.length; j++) {
      if (forwardRoutes[i][1] + returnRoutes[j][1] === distance) {
        output.push([forwardRoutes[i][0], returnRoutes[j][0]]);
      }
    }
  }

  return output;
}

console.log(
  route(
    10000,
    [
      [1, 8000],
      [2, 6000],
      [3, 4000],
    ],
    [
      [1, 2000],
      [2, 3000],
    ]
  )
);



// Write a function that determines the minimum distance required to deliver an order.

// Assumptions:
// Some places in the delivery area cannot be accessed by the driver, as there are no roads in those locations.
// The delivery area is represented as a two-dimensional grid of integers, where each integer represents one cell.
// The delivery vehicle must start from the top-left corner of the area, which is always accessible and can move one cell up, down, left, or right at a time.
// The vehicle must navigate around the areas without roads and cannot leave the area.
// The accessible areas are represented as 1, areas without roads are represented by 0 and the order destination  is represented by 9.

// Input
// The input to the function consists of three arguments:
// numRows, an integer representing the number of rows;
// numColumns, an integer representing the number of columns;
// area, representing the two-dimensional grid of integers;

// Output
// Return an integer representing the total distance traversed to deliver the order, else return -1.

// Example: 	Input:	Output:
// numRows = 3	3
// numColumns = 3
// area = [[1, 0, 0],
// 	[1, 0, 0],
// 	[1, 9, 1]]

// https://leetcode.com/discuss/interview-question/1777426/Amazon-Online-Assessment-SDE-1-(follow-up)/1271460
function graph(numRows, numColumns, area) {
  //start at [0,0]

  let dist = 0;
  let distance = 0;
  function helper(row, col, distance) {
    if (col < 0 || col > area.length - 1) return false;
    if (row < 0 || row > area[0].length - 1) return false;
    if (area[row][col] === 9) return true;

    if (area[col][row] === 1) {
      area[col][row] = 0;
      dist++;
      helper(row + 1, col);
      helper(row - 1, col);
      helper(row, col + 1);
      helper(row, col - 1);
    }
  }

  for (let col = 0; col < area.length; col++) {
    for (let row = 0; row < area[col].length; row++) {
      if (area[col][row] === 1) {
        if (helper(row, col)) {
            distance = helper(row, col);
        }
        if (area[col][row] === 9) {
            break;
        }
        console.log(area);
      }
    }
  }
  return dist;
}

console.log(
  graph(3, 3, [
    [1, 0, 0],
    [1, 0, 0],
    [1, 9, 1],
  ])
);
