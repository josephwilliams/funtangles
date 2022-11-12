import { useState } from 'react'
import ReactSelect from 'react-select'
import Button from './button'
import styles from '../styles/version-selector.module.scss'

const MOCK_VERSION = [
  'a',
  'b',
  'c',
]

const VersionSelector = () => {
  const [version, setVersion] = useState(null)
  const onClickSave = () => {

  }
  return (
    <div className={styles.container}>
      <ReactSelect
        options={MOCK_VERSION.map(version => ({
          label: version,
          value: version,
        }))}
        value={version}
        onChange={({ value }) => {
          setVersion(value)
        }}
        styles={{
          container: state => ({
            ...state,
            padding: 12,
          }),
          option: provided => ({
            ...provided,
            padding: 8,
          }),
        }}
      />
      <Button
        title={'Save'}
        onClick={onClickSave}
        className={styles.saveButton}
      />
    </div>
  )
}

export default VersionSelector
