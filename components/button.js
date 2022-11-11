import classnames from 'classnames'
import styles from '../styles/button.module.scss'

const Button = ({ title, onClick, className, id }) => {
  return (
    <div
      className={classnames(
        styles.button,
        className,
      )}
      onClick={onClick}
      id={id}
    >
      {title}
    </div>
  )
}

export default Button
