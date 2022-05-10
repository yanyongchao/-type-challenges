type trim = ' ' | '\n' | '\t'

type Trim<S extends string> = S extends `${trim}${infer L}` | `${infer L}${trim}` ? Trim<L> : S

type trimed = Trim<'  Hello World   '> // expected to be 'Hello World'