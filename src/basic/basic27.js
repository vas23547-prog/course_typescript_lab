/* 
	Реализуйте функцию insertAtPosition(arr, pos, elem), которая вставляет новый элемент в указанную позицию массива с помощью методов slice и concat.
*/
// Функция вставляет элемент в позицию через slice и concat
export function insertAtPosition(arr, pos, elem) {
  return arr.slice(0, pos).concat([elem], arr.slice(pos))
}
