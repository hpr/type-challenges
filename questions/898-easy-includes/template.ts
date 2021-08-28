type Includes<T extends readonly any[], U> = {
  [X in T[number]]: 1
}[U] extends 1 ? true : false

// type Includes<T extends readonly any[], U> = U extends T[number] ? true : false

// type Includes<T extends readonly unknown[], U> = T extends [infer HEAD, ...infer REST]
//   ? U extends HEAD
//     ? HEAD extends U
//       ? true : false
//     : Includes<REST, U>
//   : false

{
  const includes: Includes<['a', 'b', 'c'], 'a'> = true
}