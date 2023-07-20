// Min heap
function swap(heap, index1, index2){
  const temp = heap[index1]
  heap[index1] = heap[index2]
  heap[index2] = temp
}


function heappush(heap, newKey){
  if(heap.length === 0){
    heap.push(newKey)
    return
  }
  
  heap.push(newKey)

  let curr = heap.length -1
  while(curr > 0) {
    let parent = Math.floor((curr-1)/ 2)

    if(heap[curr] < heap[parent]){
      swap(heap, curr, parent)
      curr = parent
    } else {
      break
    }
  }
}

function heapify(arr){
  const heap = []
  for(let item of arr){
    heappush(heap, item)
  }

  return heap
}

function heappop(heap){
  swap(heap, 0, heap.length - 1)

  heap.pop()

  let curr = 0

  while(curr < heap.length){
    let child1 = 2*curr +1
    let child2 = 2 * curr + 2
    console.log('curr, child1, child2', curr, child1, child2)

    if(child1 > heap.length -1 || child2 > heap.length - 1){
      if(child1 > heap.length -1){
        break
      } else {
        let lesserChild = child1
        swap(heap, lesserChild, curr)
        break
      }
    } else if(heap[curr] < heap[child1] && heap[curr] < heap[child2]){
      break
    } else {
      let lesserChild = heap[child1] - heap[child2] ? child2 : child1
      swap(heap, lesserChild, curr)
      curr = lesserChild
    }
  }
  return heap
}

let arr = [5,9,8,6,1,3]
let heap = heapify(arr)
console.log(heap)

console.log(heappop(heap))
