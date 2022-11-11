import { useState, useEffect } from 'react'
import Moveable from 'react-moveable'
import { PositionableContainer, Position } from "re-position";
import { useColor } from '../utils/hooks'
import { useRectangles } from '../utils/hooks'
import styles from '../styles/shape-canvas.module.scss'

const ShapeCanvas = () => {
  const { setTouchedRectIndex, touchedRectIndex } = useColor()
  const { rectangles, deleteRectangle } = useRectangles()
  console.log('> touchedRectIndex', touchedRectIndex)
  return (
    <div id={'shape-canvas'}>
      {rectangles.map((rec, i) => (
        <Rectangle
          initialPosition={rec.position}
          style={rec.style}
          onClick={() => setTouchedRectIndex(i)}
          isActive={touchedRectIndex === i}
          deleteRectangle={deleteRectangle}
          index={i}
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

const Rectangle = ({ initialPosition, style={}, onClick, isActive, deleteRectangle, index }) => {
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
      <div className={styles.innerSquare} style={style} onClick={onClick}>
        {isActive && (
          <div className={styles.deleteButton} onClick={() => deleteRectangle(index)}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
        )}

      </div>
    </PositionableContainer>
  )
}

export default ShapeCanvas
