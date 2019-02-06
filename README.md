# 介绍

React Hooks，只在第一次渲染时触发，支持 cleanup function。

## 使用

### 不需要 cleanup

```js
import { useState } from 'react'
import useOnce from '@aximario/use-once'

function fetchData() {
    return fetch(url).then(res => res.text())
}

function Demo() {
    const [data, setData] = useState('')

    useOnce(async () => {
        const data = await fetchData()
        setData(data)
    })

    return (
        <p>{data}</p>
    )
}
```

### 需要 cleanup

```js
import { useState } from 'react'
import useOnce from '@aximario/use-once'

function Demo() {
    const [time, setTime] = useState(new Date())

    const timer
    useOnce(() => {
        timer = setInterval(() => {
            setTime(new Date())
        }, 1000)
    }, () => {
        clearInterval(timer)
    })

    return (
        <p>{time}</p>
    )
}
```