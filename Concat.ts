type Concat<T extends any[], U extends any[]> = []

type Result = Concat<[1], [2]> // expected to be [1, 2]

export {}