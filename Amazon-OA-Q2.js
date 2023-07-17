// Amazon Online Assessmenet interview-Q2-2023

// K spikes
// given an array of stock prices calculate the number of k spikes
// k spike: a high point where the point has k to left and k to right that are less than it

// example 1
// k = 2
// stocks = [2, 1, 8, 5, 3, 4 ]

// 8 and 5 are both k spikes

function findMax(arr){
  let max = 0
  let index = -1
  
  for(let i = 0; i< arr.length; i++){
    const elem = arr[i]
    if(elem > max){
      max = elem
      index = i
    }
  }

  return index
}


function findKSpikes(k, stocks) {
  let numSpikes = 0
  const myStocks = stocks
  
  while(myStocks.length > 2* k){
    numSpikes += 1
    const index = findMax(myStocks)
    myStocks.splice(index, 1)
  }

  return numSpikes
}

let k = 2
let stocks = [2, 1, 8, 5, 3, 4 ]

console.log(findKSpikes(k, stocks))



// This won't work for the above 
k = 1
stocks = [2, 1, 8, 5, 3, 4 ]

console.log(findKSpikes(k, stocks))