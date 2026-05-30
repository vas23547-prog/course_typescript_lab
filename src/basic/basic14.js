/* 
	Реализуйте функцию even_elements(arr), которая возвращает новый список, содержащий только четные элементы исходного списка. Функция не должна использовать функции высших порядков, можно использовать циклы while или for.
*/
// Функция возвращает новый массив с четными элементами через цикл while
export function even_elements(arr) {
    let result = []
    let i = 0
    while (i < arr.length) {
        if (arr[i] % 2 === 0) {
            result.push(arr[i])
        }
        i++
    }
    return result
}
