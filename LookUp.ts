interface Cat {
    type: 'cat'
    breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
    type: 'dog'
    breeds: 'Hound' | 'Brittany' | 'Bulldog' | 'Boxer'
    color: 'brown' | 'white' | 'black'
}

type LookUp<T, U> = T extends infer R ? R extends { type: U } ? { [P in keyof R]: R[P] } : never : never

type MyDog = LookUp<Cat | Dog, 'dog'> // expected to be `Dog`
