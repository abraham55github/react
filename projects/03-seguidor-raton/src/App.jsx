import { useEffect, useState  } from "react"

function App() {
  const [enabled, setEnabled] = useState(false)
  useEffect(() => {
    console.log('effect', {enabled})
  }, [enabled])

  return (
    <main>
    <div></div>
    <button onClick={() => setEnabled(!enabled)}>
      {enabled ? 'Desactivar' : 'Activar'} seguir puntero
    </button>
    </main>
  )
}

export default App
