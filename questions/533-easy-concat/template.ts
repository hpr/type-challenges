type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U]

{
  const concat: Concat<[1, 2], [3, 4]> = [1, 2, 3, 4]
}