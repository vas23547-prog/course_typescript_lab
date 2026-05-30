/* 
	Реализуйте функцию splitAndMergeStrings(strArr), которая принимает массив строк, разбивает каждую строку пополам, затем соединяет полученные части обратно в один массив. При разбиении строк нечетной длины первая часть должна быть длины на 1 больше второй части. Строки из одного символа не должны разбиваться.
*/
// Функция разбивает строки пополам и возвращает массив частей
export function splitAndMergeStrings(strArr) {
  let result = []
  let i = 0
  while (i < strArr.length) {
    let str = strArr[i]
    if (str.length <= 1) {
      result.push(str)
    } else {
      let mid = Math.ceil(str.length / 2)
      result.push(str.slice(0, mid))
      result.push(str.slice(mid))
    }
    i++
  }
  return result
}


