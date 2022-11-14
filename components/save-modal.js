import { useState } from 'react'
import Modal from './modal'
import Button from './button'
import { useRectangles } from '../utils/hooks'
import { useAuth } from '../utils/hooks'
import { createUserVersion } from '../lib/api'
import styles from '../styles/auth-modal.module.scss'

const SaveModal = ({ isOpen, onRequestClose, versions, setVersions }) => {
  const { username } = useAuth()
  const { rectangles } = useRectangles()
  const [inputText, setInputText] = useState('')
  const onClickSave = async () => {
    // create new version in db
    createUserVersion(username, { title: inputText, rectangles })
    // update list of versions in dropdown
    const newVersions = [ ...versions ]
    newVersions.push({
      title: inputText,
      ...rectangles
    })
    setVersions(newVersions)
    // close modal
    onRequestClose()
  }
  return (
    <Modal
      title={'Save Design'}
      subtext={'Create a title by which your design will be saved.'}
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <div className={styles.modalContent}>
        <input
          type={'text'}
          className={styles.modalInput}
          value={inputText}
          onChange={e => setInputText(e.target.value)}
        />
        <Button
          title={'Save'}
          onClick={onClickSave}
        />
      </div>
    </Modal>
  )
}

export default SaveModal
