class Sort{
  constructor(obj){
    this.obj = obj
  }

  sortArr(){
    return this.obj.sort()
  }

  sortArrayOfArrays(){
    function compareArrays(a,b){
      if(a[0] === b[0]){
        return a[1] - b[1]
      } else {
        return a[0] - b[0]
      }
    }
    return this.obj.sort(compareArrays)
  }
}

class MergeArrays{
  constructor(arrays){
    this.arrays = arrays
  }

  // returns bigger array or false
  canMerge(arr1, arr2){
    if(arr1[0] <= arr2[0] && arr1[1] >= arr2[1]) {
      return arr1
    } else if (arr2[0] <= arr1[0] && arr2[1] >= arr2[1]){
      return arr2
    } else {
      return false
    }
  }

  mergeArrays(){
    let simplifiedArray = this.arrays
    let i = 0
    while(i < simplifiedArray.length - 1){
      let curr = this.arrays[i]
      let next = this.arrays[i+1]
      let result = this.canMerge(curr,next)
      if(result){
        simplifiedArray[i+1] = result
        simplifiedArray.shift()
      } else {
        i+=1
      }
    }
    return simplifiedArray
  }


}


let sort = new Sort([5, 4, 3, 2 ,1])

console.log(sort.sortArr())

let arrayOfArrays = [[1, 2], [2,3], [1,3], [0,5]]

let sort2 = new Sort(arrayOfArrays)
let sortedArr = sort2.sortArrayOfArrays()
console.log(sortedArr)
let mergeArrays = new MergeArrays(sortedArr)

console.log(mergeArrays.mergeArrays())
