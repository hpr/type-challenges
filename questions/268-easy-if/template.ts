type If<C extends boolean, T, F> = C extends true ? T : F

{
  const if_: If<true, number, string> = 1
}