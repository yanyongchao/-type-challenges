type X = {
    x: {
        a: 1
        b: 'hi'
    }
    y: 'hey'
}

type Expected = {
    readonly x: {
        readonly a: 1
        readonly b: 'hi'
    }
    readonly y: 'hey'
}

type DeepReadonly<T> = T extends Record<string, any> | Array<any> ? { readonly [P in keyof T] : DeepReadonly<T[P]> } : T

type Todo = DeepReadonly<X> // should be same as `Expected`