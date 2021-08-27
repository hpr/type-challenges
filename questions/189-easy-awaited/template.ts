type Awaited<T> = T extends Promise<infer X> ? X : never

{
  const awaited: Awaited<Promise<string>> = ''
}