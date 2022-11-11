import { useState, createContext } from 'react'

const ColorContext = createContext()

function ColorProvider({ children }) {
  const [color, setColor] = useState('#ffffff')
  const [touchedRectIndex, setTouchedRectIndex] = useState(null)

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
