declare const config: Chainable


type Chainable<T extends object = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<T & {
      [P in K]: V
    }>
    get(): T
  }

const result = config
    .option('foo', 123)
    .option('name', 'type-challenges')
    .option('bar', { value: 'Hello World' })
    .get()

// 期望 result 的类型是：
interface Result {
    foo: number
    name: string
    bar: {
        value: string
    }
}