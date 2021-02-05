import { useState, useEffect } from "react"
import * as Sentry from '@sentry/node'

export default function IndexPage() {
  const [lol, setLol] = useState(false)
  useEffect(() => {
    if (lol) {
      Sentry.configureScope(scope => {
        scope.setContext("test", {
          "hi": "there"
        })
        throw new Error('kek')
      })
      
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
