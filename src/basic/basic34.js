/* 
	Напишите функцию isSymmetric(matrix), проверяющую, симметрична ли матрица относительно главной диагонали. Подсказка: главная диагональ матрицы  — это диагональ, проходящая по элементам матрицы, у которых номер строки и номер столбца одинаковы.
*/
// Функция проверяет симметричность матрицы относительно главной диагонали
export function isSymmetric(matrix) {
  if (matrix.length === 0) return true
  let rows = matrix.length
  let cols = matrix[0].length
  if (rows !== cols) return false
  let i = 0
  while (i < rows) {
    let j = 0
    while (j < cols) {
      if (matrix[i][j] !== matrix[j][i]) {
        return false
      }
      j++
    }
    i++
  }
  return true
}


