type DeepReadonly<T> = {
  readonly [P in keyof T]: T[P] extends Record<string, unknown> ? DeepReadonly<T[P]> : T[P]
}

{
  const deepReadOnly: DeepReadonly<{ foo: 'bar' }> = {
    foo: 'bar'
  }
}