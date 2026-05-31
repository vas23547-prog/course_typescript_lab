/*
	Создайте функцию, которая собирает объект из двух массивов: массива ключей и массива значений.
*/

export function fromArrays<T, K extends string>(keys: K[], values: T[]): Record<K, T> {
  const result: any = {}
  let i = 0
  while (i < keys.length && i < values.length) {
	result[keys[i]] = values[i]
	i++
  }
  return result
}

