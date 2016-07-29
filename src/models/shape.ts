export abstract class Shape {
  constructor(private _x: number, private _y: number, private _size: number, private _color: string = "green") { }

  get x(): number {
    return this._x;
  }

  get y(): number {
    return this._y;
  }

  get size(): number {
    return this._size;
  }

  get color(): string {
    return this._color;
  }

  set x(x: number) {
    this._x = x;
  }

  set y(y: number) {
    this._y = y;
  }

  set size(size: number) {
    this._size = size;
  }
}