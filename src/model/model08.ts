/* 
  Добавьте реализованный метод error, который вызывает log с префиксом "ERROR: "
*/

export abstract class Logger {
  abstract log(message: string): void;

  error(message: string): void {
	  console.log("ERROR: " + message)
  }
}

