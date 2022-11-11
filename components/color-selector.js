import { useState } from 'react'
import { HexColorPicker } from 'react-colorful'
import Button from './button'
import OutsideClickAlerter from './outside-click-alerter'
import { useColor } from '../utils/hooks'
import styles from '../styles/color-selector.module.scss'

const COLOR_SELECTOR_BUTTON_ID = 'color-selector-button'

const ColorSelector = () => {
  const { color, setColor } = useColor()
  const [isShowingColorPicker, showColorPicker] = useState(false)
  return (
    <div className={styles.colorPickerWrapper}>
      <Button
        title={'🎨'}
        onClick={() => showColorPicker(!isShowingColorPicker)}
        id={COLOR_SELECTOR_BUTTON_ID}
      />
      {isShowingColorPicker && (
        <OutsideClickAlerter
          onOutsideClick={() => {
            showColorPicker(false)
          }}
          className={styles.colorPickerHolder}
          elementIdsToIgnore={[COLOR_SELECTOR_BUTTON_ID]}
        >
          <div className={styles.colorPicker}>
            <HexColorPicker color={color} onChange={setColor} />
          </div>
        </OutsideClickAlerter>
      )}
    </div>
  )
}

export default ColorSelector
