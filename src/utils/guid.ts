export function generateUUID(a: any = null): any {
  return a ? ( a ^ Math.random() * 16 >> a / 4 ).toString(16) : ("10000000-1000" + -4e3 + -8e3 + -1e11).replace(/[018]/g, generateUUID)
}