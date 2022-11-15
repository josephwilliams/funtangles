import { useState, useEffect } from 'react'
import Button from './button'
import SaveModal from './save-modal'
import styles from '../styles/auth-modal.module.scss'

const SaveButton = ({ className, versions, setVersions, setVersion }) => {
  const [isModalOpen, setModalOpen] = useState(false)
  return (
    <div className={className}>
      <SaveModal
        isOpen={isModalOpen}
        onRequestClose={() => setModalOpen(false)}
        versions={versions}
        setVersions={setVersions}
        setVersion={setVersion}
      />
      <Button
        title={'Save'}
        onClick={() => setModalOpen(true)}
      />
    </div>
  )
}

export default SaveButton
