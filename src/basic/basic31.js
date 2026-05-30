/* 
	Реализуйте функцию transposeMatrix(matrix), которая транспонирует матрицу (меняет строки и столбцы местами).
*/
// Функция транспонирует матрицу через циклы while
export function transposeMatrix(matrix) {
  if (matrix.length === 0) return [[]]
  let rows = matrix.length
  let cols = matrix[0].length
  let result = []
  let j = 0
  while (j < cols) {
    let newRow = []
    let i = 0
    while (i < rows) {
      newRow.push(matrix[i][j])
      i++
    }
    result.push(newRow)
    j++
  }
  return result
}
