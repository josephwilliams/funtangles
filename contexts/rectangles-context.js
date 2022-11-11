import { useState, createContext } from 'react'

const RectanglesContext = createContext()

function RectanglesProvider({ children }) {
  const [rectangles, setRectangles] = useState([
    {
      position: {
        left: "40%",
        top: "40%",
        width: "200px",
        height: "200px",
        rotation: "0deg"
      }
    },
    {
      position: {
        left: "60%",
        top: "60%",
        width: "50px",
        height: "50px",
        rotation: "0deg"
      },
      style: {
        background: 'blue'
      }
    }
  ])

  const addRectangle = () => {
    console.log('> add')
    const rects = [ ...rectangles ]
    rects.push({
      position: {
        left: "40%",
        top: "40%",
        width: "100px",
        height: "100px",
        rotation: "0deg"
      },
      style: {
        background: 'blue'
      }
    })
    console.log('> rects', rects)
    setRectangles(rects)
  }

  const deleteRectangle = index => {
  }

  const clearRectangles = () => {
    setRectangles([])
  }

  console.log('> rectangles 1', rectangles)

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
