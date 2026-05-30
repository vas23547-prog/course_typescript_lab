/* 
	Реализуйте функцию zeroRowColumn(matrix, row, col), которая превращает в ноль всю строку и весь столбец матрицы, соответствующие указанным индексам.
*/
// Функция обнуляет строку и столбец в матрице
export function zeroRowColumn(matrix, row, col) {
  let i = 0
  while (i < matrix.length) {
    matrix[i][col] = 0
    i++
  }
  let j = 0
  while (j < matrix[row].length) {
    matrix[row][j] = 0
    j++
  }
  return matrix
}
