// type Chainable<O = {}> = {
//   option<K extends string, V>(key: K, value: V): Chainable<{
//     [P in K | keyof O]: P extends keyof O ? O[P] : V
//   }>
//   get(): O
// }

// type Chainable<TRes = unknown> = {
//   option<TKey extends string, TValue>(key: TKey, value: TValue): Chainable<{ [K in TKey | keyof TRes]: K extends keyof TRes ? TRes[K] : TValue }>
//   get(): TRes
// }

type Chainable<O = {}> = {
  option<K extends string, V>(key: K, value: V): Chainable<O & { [P in K]: V }>
  get(): O
}

{
  const options: any = {}
  const chainable: Chainable<typeof options> = {
    option(key, value) {
      options[key] = value
      return this
    },
    get() {
      return options
    },
  }
  console.log(chainable.option("hello", "world").get())
}
