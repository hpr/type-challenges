type MyExclude<T, U> = T extends U ? never : T

{
  const myExclude: MyExclude<number | string, number> = ''
}