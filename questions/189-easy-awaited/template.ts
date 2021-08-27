type Awaited<T extends Promise<unknown>> = T extends Promise<infer X> ? X : never

{
  const awaited: Awaited<Promise<string>> = ''
}