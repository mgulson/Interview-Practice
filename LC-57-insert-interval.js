// LC-57-insert-interval

// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.

 

// Example 1:

// Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
// Output: [[1,5],[6,9]]
// Example 2:

// Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
// Output: [[1,2],[3,10],[12,16]]
// Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

class InsertInterval{
  constructor(intervals, newInterval){
    this.intervals = intervals
    this.newInterval = newInterval
  }

  insertInterval(){
    let mergedIntervals

    for(let i=0; i< intervals.length; i++){
      const element = intervals[i]
      
      if(newInterval[0] >= element[0] && newInterval[0] <= element[1] || newInterval[1] >= element[0] && newInterval[1] <= element[1]){
        const result = this.mergeIntervals(newInterval, element)
        intervals[i] = result
      }
    }
    return intervals
  }

  mergeIntervals(interval1, interval2){
    let lowerBound;
    let upperBound

    if(interval1[0]< interval2[0]){
      lowerBound = interval1[0]
    } else {
      lowerBound = interval2[0]
    }

    if(interval1[1]> interval2[1]){
      upperBound = interval1[1]
    } else {
      upperBound = interval2[1]
    }

    return [lowerBound, upperBound]
  }

}

function insertIntervalRecursive(intervals, newInterval){
  console.log('intervals, newInterval', intervals, newInterval)

  const length = intervals.length
  for(let i=0; i < length; i++){
    const element = intervals[i]
    
    if(canMerge(element, newInterval)){
      const newMergedInterval = mergeIntervals(element, newInterval)
      intervals.splice(i,1)
      return insertIntervalRecursive(intervals, newMergedInterval)
    } else if(newInterval[0] < element[0]){
      intervals.splice(i, 0, newInterval)
      return intervals
    } else if(i === length-1) {
      return intervals.push(newInterval)
    }
  }
}

function canMerge(interval1, interval2){
  if(interval2[0] >= interval1[0] && interval2[0] <= interval1[1] || interval2[1] >= interval1[0] && interval2[1] <= interval1[1]){
    return true
  } else if(interval1[0] >= interval2[0] && interval1[0] <= interval2[1] || interval1[0] >= interval2[0] && interval1[1] <= interval2[1]){
    return true
  } else {
    false
  }
}

function mergeIntervals(interval1, interval2){
  let lowerBound;
  let upperBound

  if(interval1[0]< interval2[0]){
    lowerBound = interval1[0]
  } else {
    lowerBound = interval2[0]
  }

  if(interval1[1]> interval2[1]){
    upperBound = interval1[1]
  } else {
    upperBound = interval2[1]
  }

  return [lowerBound, upperBound]
}


let intervals = [[1,3],[6,9]]
let newInterval = [2,5]

let ii = new InsertInterval(intervals, newInterval)

console.log('result: ', ii.insertInterval())

intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]
newInterval = [4,8]

ii = new InsertInterval(intervals, newInterval)

console.log('result: ', ii.insertInterval())

intervals = [[1,3],[6,9]]
newInterval = [2,5]

let result = insertIntervalRecursive(intervals, newInterval)

console.log('result: [[1,5],[6,9]]', result)

intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]]
newInterval = [4,8]

result = insertIntervalRecursive(intervals, newInterval)

console.log('result: [[1,2],[3,10],[12,16]]', result)


console.log('test can merge')

console.log(canMerge([1,3],[2,4]), canMerge([2,4], [1,3]), canMerge([3,8], [6,7]), canMerge([6,7], [3,8]))