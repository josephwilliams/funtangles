import AuthButton from './auth-button'
import VersionSelector from './version-selector'
import ColorSelector from './color-selector'
import AddRectangleButton from './add-rectangle-button'
import ClearRectanglesButton from './clear-rectangles-button'
import { useRectangles } from '../utils/hooks'
import styles from '../styles/nav.module.scss'

const Nav = () => {
  const { addRectangle, clearRectangles } = useRectangles()
  return (
    <div className={styles.navWrapper}>
      <div className={styles.navItemsContainer}>
        <AuthButton />
        <ColorSelector />
        <AddRectangleButton addRectangle={addRectangle} />
        <ClearRectanglesButton clearRectangles={clearRectangles} />
      </div>
      <div className={styles.navItemsContainer}>
        <VersionSelector />
      </div>
    </div>
  )
}


export default Nav
