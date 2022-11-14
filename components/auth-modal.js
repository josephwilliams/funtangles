import { useState, useEffect } from 'react'
import Modal from './modal'
import Button from './button'
import { useAuth } from '../utils/hooks'
import styles from '../styles/auth-modal.module.scss'

const AuthModal = ({ isOpen, onRequestClose, setModalOpen, username }) => {
  const { setUsername } = useAuth()
  const [inputText, setInputText] = useState('')

  const onClickLogin = async () => {
    setUsername(inputText)
    setModalOpen(false)
  }

  return (
    <Modal
      title={'Login'}
      subtext={'Input a new or previously created username.'}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      hideExitButton={!username}
    >
      <div className={styles.modalContent}>
        <input
          type={'text'}
          className={styles.modalInput}
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <Button
          title={'Login'}
          onClick={onClickLogin}
        />
      </div>
    </Modal>
  )
}

export default AuthModal
