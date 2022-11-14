import Modal from 'react-modal'
import style from '../styles/modal.module.scss'

const styles = {
  overlay: {
    position: 'fixed',
    zIndex: 1020,
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    background: 'rgba(255, 255, 255, 0.75)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {
    background: 'white',
    maxWidth: 'calc(100vw - 2rem)',
    maxHeight: 'calc(100vh - 2rem)',
    overflowY: 'auto',
    position: 'relative',
    borderRadius: '20px',
    inset: '0px',
    border: '1px solid #f6f6f6',
    boxShadow:
      '0px 40px 64px -12px rgb(0 0 0 / 8%), 0px 0px 14px -4px rgb(0 0 0 / 5%), 0px 32px 48px -8px rgb(0 0 0 / 10%)',
    padding: '20px',
  },
}

const StyledModal = ({
  isOpen,
  onRequestClose, // this func is required for exit button functionality
  children,
  width = '20rem',
  padding = '20px',
  topTitle,
  title,
  hideExitButton,
  subtext = '',
}) => {
  return (
    <Modal
      style={{ ...styles, content: { ...styles.content, width, padding } }}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      closeTimeoutMS={200}
    >
      {topTitle && <div className={style.topTitle}>{topTitle}</div>}
      {title && (
        <div className={style.topRow}>
          <div className={'flex'}>
            <div className={style.modalTitle}>{title}</div>
          </div>
          {!hideExitButton && (
            <div className={style.exitButton} onClick={onRequestClose}>
              {'ⓧ'}
            </div>
          )}
        </div>
      )}
      {subtext && (<div className={style.modalSubtext}>{subtext}</div>)}
      {children}
    </Modal>
  )
}

export default StyledModal
