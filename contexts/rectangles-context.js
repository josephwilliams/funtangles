import { useState, createContext, useEffect } from 'react'
import { useColor } from '../utils/hooks'

const RectanglesContext = createContext()

const DEFAULT_START_POSITION = {
  left: '100px',
  top: '100px',
  width: '100px',
  height: '100px',
  rotation: '0deg',
}

const DEFAULT_INITIAL_STATE = [
  {
    position: DEFAULT_START_POSITION,
    style: {
      background: '#ffffff'
    },
  }
]

function RectanglesProvider({ children }) {
  const { color, touchedRectIndex, setTouchedRectIndex } = useColor()

  const [rectangles, setRectangles] = useState(DEFAULT_INITIAL_STATE)

  const addRectangle = () => {
    const rects = [ ...rectangles ]
    rects.push({
      position: DEFAULT_START_POSITION,
      style: {
        background: color,
      },
    })
    setRectangles(rects)
    setTouchedRectIndex(rects.length - 1)
  }

  const deleteRectangle = index => {
    const rects = [ ...rectangles ]
    rects.splice(index, 1)
    setRectangles(rects)
    setTouchedRectIndex(null)
  }

  const clearRectangles = () => {
    setRectangles([])
  }

  useEffect(() => {
    let rects = [ ...rectangles ]
    if (Number.isInteger(touchedRectIndex)) {
      (rects[touchedRectIndex] || {}).style = { background: color }
    }
    setRectangles(rects)
  }, [color])

  return (
    <RectanglesContext.Provider
      value={{
        rectangles,
        addRectangle,
        deleteRectangle,
        clearRectangles,
      }}
    >
      {children}
    </RectanglesContext.Provider>
  )
}

export { RectanglesProvider, RectanglesContext }
