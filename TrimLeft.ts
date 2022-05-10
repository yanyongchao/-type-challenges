// 你的答案
type trim = ' ' | '\n' | '\t'
type TrimLeft<S extends string> = S extends `${trim}${infer L}` ? TrimLeft<L> : S

type trimed = TrimLeft<'  Hello World  '> // 应推导出 'Hello World  '

export {}