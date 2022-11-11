import AuthButton from './auth-button'
import VersionSelector from './version-selector'
import styles from '../styles/nav.module.scss'

const Nav = () => {
  return (
    <div className={styles.navWrapper}>
      <div className={styles.navItemsContainer}>
        <AuthButton />
      </div>
      <div className={styles.navItemsContainer}>
        <VersionSelector />
      </div>
    </div>
  )
}


export default Nav
