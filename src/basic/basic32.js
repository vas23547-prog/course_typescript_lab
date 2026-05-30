/* 
	Напишите функцию matrixMultiplication(A, B), выполняющую перемножение матриц А и В.
*/
// Функция умножает две матрицы
export function matrixMultiplication(A, B) {
  if (A.length === 0 || B.length === 0) return [[]]
  let rowsA = A.length
  let colsA = A[0].length
  let colsB = B[0].length
  let result = []
  let i = 0
  while (i < rowsA) {
    let row = []
    let j = 0
    while (j < colsB) {
      let sum = 0
      let k = 0
      while (k < colsA) {
        sum += A[i][k] * B[k][j]
        k++
      }
      row.push(sum)
      j++
    }
    result.push(row)
    i++
  }
  return result
}
