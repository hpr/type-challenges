type First<T extends any[]> = T extends [] ? never : T[0]

{
  const first: First<[1, 2, 3]> = 1
}