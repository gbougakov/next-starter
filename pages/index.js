import { useState, useEffect } from "react"

export default function IndexPage() {
  const [lol, setLol] = useState(false)
  useEffect(() => {
    if (lol) {
      throw new Error('kek')
    }
  }, [lol])
  return (
    <div>
      <p>Hello world</p>
      <button onClick={() => {
        setLol(true)
      }}>raise</button>
    </div>
  )
}
