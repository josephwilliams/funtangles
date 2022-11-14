import { useState, useEffect } from 'react'
import { PositionableContainer, Position } from 're-position';
import { useColor } from '../utils/hooks'
import { useRectangles } from '../utils/hooks'
import styles from '../styles/shape-canvas.module.scss'

const ShapeCanvas = () => {
  const { setTouchedRectIndex, touchedRectIndex } = useColor()
  const { rectangles, deleteRectangle, setRectangles } = useRectangles()
  console.log('> rectangles', rectangles)
  const updatePositions = (index, pos) => {
    let rects = [ ...rectangles ]
    rects[index].position = pos
    setRectangles(rects)
  }

  return (
    <div id={'shape-canvas'}>
      {(rectangles || []).map((rec, i) => (
        <Rectangle
          initialPosition={rec.position}
          style={rec.style}
          onClick={() => setTouchedRectIndex(i)}
          onClickDelete={() => deleteRectangle(i)}
          isActive={touchedRectIndex === i}
          deleteRectangle={deleteRectangle}
          updatePositions={updatePositions}
          index={i}
          key={i}
        />
      ))}
    </div>
  )
}

const Rectangle = ({ initialPosition, style={}, onClick, isActive, onClickDelete, index, updatePositions }) => {
  console.log('> initialPosition', initialPosition)
  const [position, setPosition] = useState(initialPosition)
  return (
    <PositionableContainer
      className={styles.rectangle}
      movable={isActive}
      resizable={isActive}
      rotatable={isActive}
      position={position}
      onUpdate={(pos) => {
        setPosition(pos)
        updatePositions(index, pos)
        onClick()
      }}
    >
      <div className={styles.innerSquare} style={style} onClick={onClick}>
        {isActive && (
          <div className={styles.deleteButton} onClick={onClickDelete}>
            <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' strokeWidth={1.5} stroke='currentColor'>
              <path strokeLinecap='round' strokeLinejoin='round' d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z' />
            </svg>
          </div>
        )}
      </div>
    </PositionableContainer>
  )
}

export default ShapeCanvas
