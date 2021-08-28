type MyReadonly<T> = {
  readonly [P in keyof T]: T[P]
}

{
  const myReadonly: MyReadonly<{ title: string }> = { title: '' }
}