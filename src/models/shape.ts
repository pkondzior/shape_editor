import {generateUUID} from "../utils/guid.ts"

export type ShapeConstructor = {new (x: number, y: number, size: number, color: string): Shape}

export abstract class Shape {
  private _id: string;

  constructor(private _x: number, private _y: number, private _size: number, private _color: string = "green") {
    this._id = generateUUID();
  }

  get id(): string {
    return this._id;
  }

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