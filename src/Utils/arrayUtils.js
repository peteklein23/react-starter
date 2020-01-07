export function range(start, end) {
  return Array(end - start + 1)
    .fill()
    .map((_, i) => start + i);
}
