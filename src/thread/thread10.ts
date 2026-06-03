/* 
	Реализовать функцию XXX
*/

export class NestedValidationError extends Error {
  public path: string[];
  
  constructor(message: string, path: string[]) {
    super(message);
    this.name = 'NestedValidationError';
    this.path = path;
  }
}

export interface Address {
  street: string;
  city: string;
}

export interface Person {
  name: string;
  age: number;
  address: Address;
}

export function validatePerson(person: Person): void {
  // Проверить name (не пустой)
  // Проверить age (>= 0)
  // Проверить address.street (не пустой)
  // Проверить address.city (не пустой)
  // Для ошибок указать путь в path
  
  if (!person.name.trim()) {
    throw new NestedValidationError("Name is required", ["name"]);
  }
  
  if (person.age < 0) {
    throw new NestedValidationError("Age must be non-negative", ["age"]);
  }
  
  if (!person.address.street.trim()) {
    throw new NestedValidationError("Street is required", ["address", "street"]);
  }
  
  if (!person.address.city.trim()) {
    throw new NestedValidationError("City is required", ["address", "city"]);
  }
}
