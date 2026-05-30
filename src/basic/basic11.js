/* 
	Реализуйте функцию is_prime(n), которая проверяет, является ли число n простым. Простое число — это натуральное число больше единицы, которое делится только на 1 и само себя. Функция должна использовать цикл while.
*/
// Функция проверяет простоту числа через цикл while
export function is_prime(n) {
  if (n <= 1) return false
  if (n === 2) return true
  let i = 2
  while (i <= Math.sqrt(n)) {
    if (n % i === 0) return false
    i++
  }
  return true
}


