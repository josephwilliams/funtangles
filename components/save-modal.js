import { useState } from 'react'
import Modal from './modal'
import Button from './button'
import { useRectangles } from '../utils/hooks'
import { useAuth } from '../utils/hooks'
import { createUserVersion } from '../lib/api'
import styles from '../styles/auth-modal.module.scss'

const SaveModal = ({ isOpen, onRequestClose, versions, setVersions, setVersion }) => {
  const { username, refetchUser } = useAuth()
  const { rectangles } = useRectangles()
  const [inputText, setInputText] = useState('')
  const onClickSave = async () => {
    const newVersionTitle = inputText
    // create new version in db
    createUserVersion(username, { title: newVersionTitle, rectangles })
    // update list of versions in dropdown
    const newVersions = [ ...versions ]
    newVersions.push({
      title: newVersionTitle,
      ...rectangles
    })
    setVersions(newVersions)
    // update user
    refetchUser()
    // set version
    setVersion(newVersionTitle)
    // remove input text
    setInputText('')
    // close modal
    onRequestClose()
  }
  return (
    <Modal
      title={'Save Design'}
      subtext={'Create a title for your design.'}
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
