let array1D = [1,2,3] // unidimensional (1-dimensional) array

let array2D = [[1,2,3],[4,5,6],[7,8,9]] // bidimensional (2-dimensional) array

let matrix = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

matrix[1][2] = 77 // Update value at specific index in the matrix
console.log(matrix)

// _____________________________________________

let value = matrix[0][1] // Accessing value at specific index in the matrix
console.log(value)

// _____________________________________________

// Common operations with bidimensional arrays

for (let i=0; i < matrix.length; i++){
    for (let j=0; j < matrix[i].length; j++){
        console.log(matrix[i][j]) // Accessing each element of the matrix
    }
}

function findElement(matrix, element){
    for (let i=0; i < matrix.length; i++){
        for (let j=0; j < matrix[i].length; j++){
            if (matrix[i][j] == element){ // Searching for a specific element in the matrix
                return true
            }
        }
    }
    return false
}

console.log(findElement(matrix, 5)) // Output: true if element is found, false otherwise

// _____________________________________________

function duplicateMatrix(matrix){
    let newMatrix = []
    for (let i = 0; i < matrix.length; i++){
        newMatrix[i] = [...matrix[i]] // Duplicating the matrix by creating a shallow copy of each row
    }
    return newMatrix
}

console.log(duplicateMatrix(matrix)) // Output: Duplicate of the original matrix