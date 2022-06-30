// https://stackoverflow.com/questions/54528283/find-the-nearest-restaurant-given-locations

// function nearestResturantsWithSort(totralRes,allLocations,toReturn) {
//     const locs = allLocations.map(location => {
//         return {loc: location, distance: calcDistance(location)};
//     });
//     locs.sort((a,b) => (a.distance > b.distance) ? 1 : ((b.distance > a.distance) ? -1 : 0));
//     return locs.slice(0, toReturn);
// }

// var Heap = require('heap');
// function nearestResturantsWithHeap(totralRes,allLocations,toReturn) {
//     let locs = allLocations.map(location => {
//         return {loc: location, distance: calcDistance(location)};
//     });
//     return Heap.nsmallest(locs, toReturn, function(a, b) { return a.distance - b.distance; });
// }

// function calcDistance(location) {
//     return Math.sqrt(Math.pow(location[0],2) + Math.pow(location[1],2));
// }


// var kClosest = function(points, k) {
//     let maxPQ = new MaxPriorityQueue()
//     for (let point of points) {
//         let dist = squaredDistance(point)
//         if (maxPQ.size() < k) {
//             // Fill the max PQ up to k points
//             maxPQ.enqueue(point, dist)
//         } else if (dist < maxPQ.front().priority) {
//             // If the max PQ is full and a closer point is found,
//             // discard the farthest point and add this one
//             maxPQ.dequeue()
//             maxPQ.enqueue(point, dist)
//         }
//     }
    
//     // Return all points stored in the max PQ
//     return maxPQ.toArray().map(el => el.element)
// };

// // Calculate and return the squared Euclidean distance
// const squaredDistance = ([x,y]) => x ** 2 + y ** 2

// console.log(kClosest([[1,3],-2,2],1));
