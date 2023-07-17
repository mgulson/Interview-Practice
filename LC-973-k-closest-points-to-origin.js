// LC-973-k-closest-points-to-origin

// Given an array of points where points[i] = [xi, yi] represents a point on the X-Y plane and an integer k, return the k closest points to the origin (0, 0).

// The distance between two points on the X-Y plane is the Euclidean distance (i.e., √(x1 - x2)2 + (y1 - y2)2).

// You may return the answer in any order. The answer is guaranteed to be unique (except for the order that it is in).

// Example 1
// Input: points = [[1,3],[-2,2]], k = 1
// Output: [[-2,2]]
// Explanation:
// The distance between (1, 3) and the origin is sqrt(10).
// The distance between (-2, 2) and the origin is sqrt(8).
// Since sqrt(8) < sqrt(10), (-2, 2) is closer to the origin.
// We only want the closest k = 1 points from the origin, so the answer is just [[-2,2]].
// Example 2:

// Input: points = [[3,3],[5,-1],[-2,4]], k = 2
// Output: [[3,3],[-2,4]]
// Explanation: The answer [[-2,4],[3,3]] would also be accepted.

function calculateDistance(pt1, pt2){
  let inside = Math.pow(pt1[0]-pt2[0], 2) + Math.pow(pt1[1]-pt2[1], 2)
  return Math.sqrt(inside)
}

function sortArray(array){
  const sortFunction = (a, b) => a[1] - b[1]
  return array.sort(sortFunction)
}
function kClosest(points, k) {
  let array = []
  for(let i = 0; i<points.length; i++){
    let elem = points[i]
    const distance = calculateDistance(elem, [0,0])
    array.push([elem, distance])
  }

  const sortedArray = sortArray(array)

  const result = []
  for(let i = 0; i< k; i++){
    result.push(sortedArray[i][0])
  }
  return result
};

console.log('calculate distance', calculateDistance([1,1], [0,0]))
console.log('sortArray', sortArray([[0, 1], [100, 999], [5, 8]]))

let points = [[1,3],[-2,2]], k = 1

console.log(kClosest(points, k))


points = [[3,3],[5,-1],[-2,4]], k = 2

console.log(kClosest(points, k))