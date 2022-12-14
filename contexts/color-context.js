import { useState, createContext } from 'react'

const ColorContext = createContext()

function ColorProvider({ children }) {
  const [color, setColor] = useState('#cdeeff')
  const [touchedRectIndex, setTouchedRectIndex] = useState(0)

  return (
    <ColorContext.Provider
      value={{
        touchedRectIndex,
        setTouchedRectIndex,
        color,
        setColor,
      }}
    >
      {children}
    </ColorContext.Provider>
  )
}

export { ColorProvider, ColorContext }
