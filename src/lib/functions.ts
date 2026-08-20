export function randomNumbers(count: number): number[] {
  const result: number[] = [];
  for (let i = 0; i < count; i++) {
    const num = Math.floor(Math.random() * 17) - 8; // range: -8 to 8
    result.push(num);
  }
  return result;
}