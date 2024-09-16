import { useState } from 'react'

function MyButton() {
  const [count, setCount] = useState(0)

  function handleClick() {
    setCount(count + 1)
  }

  return (
    <div>
      <button onClick={handleClick} className='text-2xl'>
        Clicked {count} times
      </button>
    </div>
  )
}

export default function MyApp() {
  return <MyButton />
}
