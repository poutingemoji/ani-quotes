export function randomBetween(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
export function randomChoice(arr) {
  return arr[randomBetween(0, arr.length - 1)];
}
