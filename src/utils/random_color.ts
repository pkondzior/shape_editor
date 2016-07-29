export function randomColor(): string {
  const colors = [
    "green", "red", "yellow", 
    "DarkKhaki", "MediumSlateBlue", "Peru", 
    "YellowGreen","SeaGreen", "Orange", "MediumSeaGreen"];
  return colors[Math.round((Math.random() * 1000) % colors.length)];
}