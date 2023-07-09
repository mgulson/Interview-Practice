//LC-542

// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.

// Example 1
// Input: mat = [[0,0,0],[0,1,0],[0,0,0]]
// Output: [[0,0,0],[0,1,0],[0,0,0]]

// Example 2
// Input: mat = [[0,0,0],[0,1,0],[1,1,1]]
// Output: [[0,0,0],[0,1,0],[1,2,1]]


class Matrix {
  constructor(matrix){
    this.matrix = matrix
    this.m = matrix.length
    this.n = matrix[0].length
    this.shortestPaths = [...Array(this.m)].map(e => Array(this.n).fill(-1));
  }

  findPathToZero(){
    // pretend 3x3 or at least 2 x 2
    const matrix = this.matrix

    const m = matrix.length
    const n = matrix[0].length

    
    for(let i =0; i<m; i++){
      for(let j =0; j<n; j++){
        this.shortestPaths[i][j] = this.findShortestPath(i, j, -1,-1)
      }
    }

    return this.shortestPaths
  }

  findShortestPath(i , j, previ, prevj){
    const m = this.m
    const n = this.n

    const matrix = this.matrix
    
    if(this.shortestPaths[i][j] !== -1){
      return this.shortestPaths[i][j]
    } else if(matrix[i][j] === 0){
      return 0
    } else { 
      if(i === 0){
        if(j=== 0){
          if(previ === i+1 && prevj === j){
            return 1 + this.findShortestPath(i, j+1, i, j)
          } else if(previ === i && prevj === j+1){
            return 1 + this.findShortestPath(i+1, j, i, j)
          } else{
            return 1 + Math.min(this.findShortestPath(i+1, j, i, j), this.findShortestPath(i, j+1, i, j))
          }
        } else if(j === n-1){
          if(previ === i+1 && prevj === j){
            return 1 + this.findShortestPath(i, j-1, i, j)
          } else if(previ === i && prevj === j-1){
            return 1 + this.findShortestPath(i+1, j, i, j)
          } else{
            return 1 + Math.min(this.findShortestPath(i+1, j, i, j), this.findShortestPath(i, j-1, i, j))
          }
        } else {
          if(previ === i+1 && prevj === j){
            return 1 + Math.min(this.findShortestPath(i, j+1, i, j), this.findShortestPath(i, j-1, i, j))
          } else if(previ === i && prevj === j+1){
            return 1 + Math.min(this.findShortestPath(i+1, j, i, j), this.findShortestPath(i, j-1, i, j))
          } else if(previ === i && prevj === j-1){
            return 1 + Math.min(this.findShortestPath(i+1,j, i, j), this.findShortestPath(i, j+1, i, j))
          } else{
            return 1 + Math.min(this.findShortestPath(i+1, j), this.findShortestPath(i, j+1), this.findShortestPath(i, j-1))
          }
        }
      } else if(i === m-1){
        if(j=== 0){
          if(previ === i-1 && prevj === j){
            return 1 + this.findShortestPath(i, j+1, i, j)
          } else if(previ === i && prevj === j+1){
            return 1 + this.findShortestPath(i-1, j, i, j)
          } else{
            return 1 + Math.min(this.findShortestPath(i-1, j, i, j), this.findShortestPath(i, j+1, i, j))
          }
        } else if(j === n-1){
          if(previ === i-1 && prevj === j){
            return 1 + this.findShortestPath(i, j-1, i, j)
          } else if(previ === i && prevj === j-1){
            return 1 + this.findShortestPath(i-1, j, i, j)
          } else{
            return 1 + Math.min(this.findShortestPath(i-1, j, i, j), this.findShortestPath(i, j-1, i, j))
          }
        } else{
          if(previ === i-1 && prevj === j){
            return 1 + Math.min(this.findShortestPath(i, j+1, i, j), this.findShortestPath(i, j-1, i, j))
          } else if(previ === i && prevj === j+1){
            return 1 + Math.min(this.findShortestPath(i-1, j, i, j), this.findShortestPath(i, j-1, i, j))
          } else if(previ === i && prevj === j-1){
            return 1 + Math.min(this.findShortestPath(i-1,j, i, j), this.findShortestPath(i, j+1, i, j))
          } else{
            return 1 + Math.min(this.findShortestPath(i-1, j, i, j), this.findShortestPath(i, j+1, i, j), this.findShortestPath(i, j-1, i, j))
          }
        }
      } else {
        if(j=== 0){
          if(previ === i+1 && prevj === j){
            return 1 + Math.min(this.findShortestPath(i-1, j, i, j), this.findShortestPath(i, j+1, i, j))
          } else if(previ === i && prevj === j+1){
            return 1 + Math.min(this.findShortestPath(i-1, j, i, j), this.findShortestPath(i+1, j, i, j))
          } else if(previ === i-1 && prevj === j){
            return 1 + Math.min(this.findShortestPath(i+1,j, i, j), this.findShortestPath(i, j+1, i, j))
          } else{
            return 1 + Math.min(this.findShortestPath(i+1, j, i, j), this.findShortestPath(i-1, j, i, j), this.findShortestPath(i, j+1, i, j))
          }
        } else if(j === n-1){
          if(previ === i+1 && prevj === j){
            return 1 + Math.min(this.findShortestPath(i-1, j, i, j), this.findShortestPath(i, j-1, i, j))
          } else if(previ === i-1 && prevj === j){
            return 1 + Math.min(this.findShortestPath(i+1, j, i, j), this.findShortestPath(i, j-1, i, j))
          } else if(previ === i && prevj === j-1){
            return 1 + Math.min(this.findShortestPath(i+1,j, i, j), this.findShortestPath(i-1, j, i, j))
          } else{
            return 1 + Math.min(this.findShortestPath(i+1, j, i, j), this.findShortestPath(i-1, j, i, j), this.findShortestPath(i, j-1, i, j))
          }
        } else{
          if(previ === i+1 && prevj === j){
            return 1 + Math.min(this.findShortestPath(i-1, j, i, j), this.findShortestPath(i, j+1, i, j), this.findShortestPath(i, j-1, i, j))
          } else if(previ === i-1 && prevj === j){
            return 1 + Math.min(this.findShortestPath(i+1, j, i, j), this.findShortestPath(i, j+1, i, j), this.findShortestPath(i, j-1, i, j))
          } else if(previ === i && prevj === j+1){
            return 1 + Math.min(this.findShortestPath(i-1, j, i, j), this.findShortestPath(i-1, j, i, j), this.findShortestPath(i, j-1, i, j))
          } else if(previ === i && prevj === j-1){
            return 1 + Math.min(this.findShortestPath(i-1, j, i, j), this.findShortestPath(i, j+1, i, j), this.findShortestPath(i+1, j, i, j))
          } else{
            return 1 + Math.min(this.findShortestPath(i+1, j), this.findShortestPath(i-1, j), this.findShortestPath(i, j+1), this.findShortestPath(i, j-1))
          }
        }
      }
    }
  }

}

let matrix = mat = [[0,0,0],[0,1,0],[0,0,0]]
let result = new Matrix(matrix)

console.log('findPathToZero', result.findPathToZero())

// Example 2


matrix = [[0,0,0],[0,1,0],[1,1,1]]
result = new Matrix(matrix)


console.log('findPathToZero', result.findPathToZero())

// console.log('findPathToZero', result.findPathToZero())

matrix = [[1,1,1],[1,0,1],[1,1,1]]
result = new Matrix(matrix)

console.log('findPathToZero', result.findPathToZero())
