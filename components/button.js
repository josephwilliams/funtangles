import classnames from 'classnames'
import styles from '../styles/button.module.scss'

const Button = ({ title, onClick, className }) => {
  return (
    <div
      className={classnames(
        styles.button,
        className,
      )}
      onClick={onClick}
    >
      {title}
    </div>
  )
}

export default Button
