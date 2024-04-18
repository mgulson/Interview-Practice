// Amazon Online Assessment SDE2  Question 1
// Maximum Quality sent over a channel

// Basically the quality of a channel is the median of a channel
// Given n = number of channels
// Given packets = unsorted array of packets

// Find the average quality of the channels

// Example 1
// 
// n = 2 packets = [ 3, 6, 1, 2, 8, 4, 5]
// channel 1 = [1, 2, 3, 4, 5, 6]
// channel 2 = [ 8 ]

// median = ((3 + 4)/2 + 8)/2 = ceil(5.75) = 6

// https://leetcode.com/discuss/interview-question/1518678/amazon-oa-sde2-seattle

function getQualityOfChannels(packets,n){
  const lengthPackets = packets.length
  const sortedPackets = packets.sort((a,b) => a - b)

  const extraPackets = []

  let median = 0

  for(let i = lengthPackets - n +1; i< lengthPackets; i++){
    extraPackets.push(sortedPackets.pop())
  }

  for(let i = 0; i < extraPackets.length; i++){
    median += extraPackets[i]
  }

  median += findMedian(sortedPackets)

  const result  = Math.ceil(median/n)
  
  return result
}

function findMedian(arr){
  if(arr.length % 2 === 0){
    return (arr[arr.length/2] + arr[(arr.length/2) - 1])/2
  } else {
    return arr[Math.floor(arr.length/2)]
  }
}


// console.log(findMedian([1, 2, 3, 4, 5, 6]))

let n = 2
let packets = [ 3, 6, 1, 2, 8, 4, 5]

console.log(getQualityOfChannels(packets, n))


n = 5
packets = [ 3, 6, 1, 2, 8, 4, 5, 10, 11, 12, 14, 8]

console.log(packets.sort((a,b)=> a-b))
console.log(getQualityOfChannels(packets, n))
console.log(Math.ceil((5+10+11+12+14)/5))



def createHash(wait):
    hash_ = {}
    for i in range(len(wait)):
        if i >= wait[i]:
            if wait[i] in hash_:
                hash_[wait[i]] += 1
            else:
                hash_[wait[i]] = 1
                
    return hash_