type MyPick<T, K extends keyof T> = {
  [P in K]: T[P]
}

{
  const myPick: MyPick<{ title: string, desc: string }, 'title'> = { title: '' }
}