export function numberWithCommas(x: number): string {
  return (typeof x === 'number' ? x : 0)
    .toFixed(2)
    .replace('.', ',')
    .replace(/\B(?=(\d{3})+(?!\d))/g, '.');
}
