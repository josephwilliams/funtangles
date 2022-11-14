import { useState, useEffect } from 'react'
import ReactSelect from 'react-select'
import SaveButton from './save-button'
import { getUserByUsername } from '../lib/api'
import { useAuth, useRectangles } from '../utils/hooks'
import styles from '../styles/version-selector.module.scss'

const VersionSelector = () => {
  const { username, user } = useAuth()
  const { setRectangles } = useRectangles()
  const [versions, setVersions] = useState([])
  const [version, setVersion] = useState(null)

  useEffect(() => {
    const getUserVersions = async () => {
      const gotUser = await getUserByUsername(username)
      const userVersionsObj = gotUser?.versions || {}
      const newVersions = []
      Object.keys(userVersionsObj).map(key => {
        newVersions.push({
          title: key,
          ...userVersionsObj[key]
        })
      })

      setVersions(newVersions)
      const firstRectanglesTitle = newVersions[0]?.title
      if (firstRectanglesTitle) {
        const firstRectangles = (user?.versions || {})[firstRectanglesTitle]
        setRectangles(firstRectangles)
      }
    }

    getUserVersions()
  }, [username])

  useEffect(() => {
    const newRectangles = (user?.versions || {})[version]
    if (newRectangles) setRectangles(newRectangles)
  }, [version])

  return (
    <div className={styles.container}>
      <ReactSelect
        options={versions.map(version => ({
          label: version.title,
          value: version.title,
        }))}
        onChange={value => {
          setVersion(value.label)
        }}
        styles={{
          container: state => ({
            ...state,
            padding: 8,
          }),
          option: provided => ({
            ...provided,
            padding: 8,
          }),
        }}
      />
      <SaveButton
        versions={versions}
        setVersions={setVersions}
        className={styles.saveButton}
      />
    </div>
  )
}

export default VersionSelector
