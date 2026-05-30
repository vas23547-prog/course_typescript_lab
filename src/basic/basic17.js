/* 
	Напишите функцию remove_duplicates(arr), удаляющую дублирующиеся значения из массива, сохраняя порядок остальных элементов.
	Подсказка: можно использовать функцию includes.
*/
// Функция удаляет дубликаты через цикл while с использованием includes
export function remove_duplicates(arr) {
    let unique = []
    let i = 0
    while (i < arr.length) {
        if (!unique.includes(arr[i])) {
            unique.push(arr[i])
        }
        i++
    }
    return unique
}
