type AppendArgument<Fn, A> = Fn extends (...args: infer P) => infer R ? (...args: [...P, A]) => R : never

{
  const appendArgument: AppendArgument<Math['pow'], number> = (a, b, c) => a ** b + c
}