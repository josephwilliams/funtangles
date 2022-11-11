import { useState, createContext } from 'react'
import { useColor } from '../utils/hooks'

const RectanglesContext = createContext()

function RectanglesProvider({ children }) {
  const { color, touchedRectIndex, setTouchedRectIndex } = useColor()

  const [rectangles, setRectangles] = useState([
    {
      position: {
        left: "200px",
        top: "200px",
        width: "200px",
        height: "200px",
        rotation: "0deg"
      }
    },
  ])

  const addRectangle = () => {
    const rects = [ ...rectangles ]
    rects.push({
      position: {
        left: "100px",
        top: "100px",
        width: "100px",
        height: "100px",
        rotation: "0deg"
      },
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
