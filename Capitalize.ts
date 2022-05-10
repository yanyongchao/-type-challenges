type MyCapitalize<S extends string> = S extends `${infer P}${infer Q}`?`${Uppercase<P>}${Q}`:''
type capitalized = MyCapitalize<'hello world'> // expected to be 'Hello world'