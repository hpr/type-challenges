type AnyOf<T extends readonly any[]> = T extends [infer HEAD, ...infer REST]
  ? HEAD extends 0 | '' | false | [] | { [P in any]: never } // falsey
    ? AnyOf<REST> : true
  : false

  {
    const anyOf: AnyOf<[0, '', false, 1]> = true
  }