interface Todo {
    title: string
    description: string
    completed: boolean
}

type MyReadonly2<T extends object, U extends keyof T> = { readonly [K in U]: T[K] } & { [O in keyof T as O extends U ? never : O]: T[O] }

const todo: MyReadonly2<Todo, 'title' | 'description'> = {
    title: "Hey",
    description: "foobar",
    completed: false,
}

todo.title = "Hello" // Error: cannot reassign a readonly property
todo.description = "barFoo" // Error: cannot reassign a readonly property
todo.completed = true // OK