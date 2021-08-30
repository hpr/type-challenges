// type AppendToObject<T, U, V> = {
//   [K in keyof T]: T[K]
// }

// type AppendToObject<T, U extends string, V> = T & { [P in U]: V }

type AppendToObject<T, U extends string, V> = {
  [P in (keyof T) | U]: P extends keyof T ? T[P] : V
}

{
  const appendToObject: AppendToObject<{}, 'name', ''> = { name: '' }
}