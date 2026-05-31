/*
	Создать класс Point, который принимает координаты точки либо отдельно (по оси X и Y), либо сразу массивом координат [X,Y,Z].
*/

export class Point {
    coords: number[];
    constructor(x: number, y: number);
    constructor(coords: [number, number]);
    constructor(...args: any[]) {
	if (args.length === 1 && Array.isArray(args[0])) {
	  this.coords = args[0]
	} else {
	  this.coords = [args[0], args[1]]
}
    }
}
