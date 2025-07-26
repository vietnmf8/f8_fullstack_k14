import {useReducer, useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const reducer = (a, b) => {
  // Cần trả ra một kieu giống với initialState
  if (b.type === 'count/increase') {
    console.log(`Đã tăng 1 đơn vị. State hiện tại = ${a.count + 1}`)
    return {...a, count: a.count + 1}
  }

  if (b.type === 'count/decrease') {
    console.log(`Đã trừ 1 đơn vị. State hiện tại = ${a.count - 1}`)
    return {...a, count: a.count - 1}
  }

  if (b.type === 'name/change-name') {
    console.log(`Dang nhap input`)
    return {...a, name: b.value}
  }

  return a
}


function App() {
  console.log('app rendering...')
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    name: null,
  })

  const onIncrease = () => {
    dispatch({
      type: 'count/increase',
    })
  }

  const onDecrease = () => {
    dispatch({
      type: 'count/decrease',
    })
  }

  const onInput = (e) => {
    dispatch({
      type: 'name/change-name',
      value: e.target.value,
    })
  }

  return (
    <>
      <h1>count: {state.count}</h1>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <input
          value={state.name || ''}
          onChange={onInput}
      />
    </>
  )
}

export default App
