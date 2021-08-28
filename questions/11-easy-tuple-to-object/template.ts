type TupleToObject<T extends readonly string[]> = {
  [P in T[number]]: P
}

{
  const tupleToObject: TupleToObject<['a', 'b']> = { a: 'a', b: 'b' }
}