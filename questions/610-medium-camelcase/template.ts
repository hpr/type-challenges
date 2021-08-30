type CamelCase<S extends string> =
  S extends `${infer H}-${infer T}`
    ? T extends Capitalize<T>
      ? `${H}-${CamelCase<T>}`
      : `${H}${CamelCase<Capitalize<T>>}`
    : S

{
  const camelCase: CamelCase<'foo-bar'> = 'fooBar'
}