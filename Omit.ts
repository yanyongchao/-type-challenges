interface Todo {
    title: string
    description: string
    completed: boolean
}

type MyOmit<T extends object, U> = {
    [K in keyof T as K extends U ? never : K]: T[K]
}
  
type TodoPreview = MyOmit<Todo, 'description' | 'title'>

const todo: TodoPreview = {
    completed: false,
}

export {}