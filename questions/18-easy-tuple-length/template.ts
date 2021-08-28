type Length<T extends readonly any[]> = T['length']

{
  const length: Length<[1,2,3,4]> = 4
}