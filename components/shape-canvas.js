import { useState, useEffect } from 'react'
import Moveable from 'react-moveable'
import { PositionableContainer, Position } from "re-position";
import { useColor } from '../utils/hooks'
import { useRectangles } from '../utils/hooks'

const INITIAL_POSITIONS = [
  null,
  {
    left: "40%",
    top: "40%",
    width: "200px",
    height: "200px",
    rotation: "0deg"
  },
]

const ShapeCanvas = () => {
  const { setTouchedRectIndex } = useColor()
  const { rectangles } = useRectangles()
  console.log('> rectangles 2', rectangles)

  return (
    <div id={'shape-canvas'}>
      {rectangles.map((rec, i) => (
        <Rectangle
          initialPosition={rec.position}
          style={rec.style}
          onClick={() => setTouchedRectIndex(i)}
          key={i}
        />
      ))}
    </div>
  )
}

const DEFAULT_START_POSITION = {
  left: "40%",
  top: "40%",
  width: "200px",
  height: "200px",
  rotation: "0deg"
}

const Rectangle = ({ initialPosition, style={}, onClick }) => {
  const [position, setPosition] = useState(initialPosition || DEFAULT_START_POSITION)
  return (
    <PositionableContainer
      className="container"
      movable
      resizable
      rotatable
      position={position}
      onUpdate={(pos) => {
        setPosition(pos)
      }}
    >
      <div className={'innerSquare'} style={style} onClick={onClick}>
        <span>re-position</span>
      </div>
    </PositionableContainer>
  )
}

export default ShapeCanvas
