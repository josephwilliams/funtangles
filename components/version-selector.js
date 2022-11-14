import { useState, useEffect } from 'react'
import SaveButton from './save-button'
import { getUserByUsername } from '../lib/api'
import { useAuth, useRectangles } from '../utils/hooks'
import styles from '../styles/version-selector.module.scss'

const VersionSelector = () => {
  const { username, user, refetchUser } = useAuth()
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
        if (firstRectangles) setRectangles([ ...firstRectangles ])
      } else {
        setVersion(null)
        setRectangles([])
      }
    }

    getUserVersions()
  }, [username])

  useEffect(() => {
    // NOTE: refetch user to use newly saved version
    refetchUser()
    const newRectangles = (user?.versions || {})[version]
    if (newRectangles) setRectangles([ ...newRectangles ])
  }, [version])

  return (
    <div className={styles.container}>
      <select
        onChange={e => {
          console.log('> version', e.target.value)
          setVersion(e.target.value)
        }}
        value={version ?? undefined}
        className={styles.versionSelector}
      >
        {versions.map((version, i) => (
          <option key={i} value={version.title}>
            {version.title}
          </option>
        ))}
      </select>
      <SaveButton
        versions={versions}
        setVersions={setVersions}
        className={styles.saveButton}
      />
    </div>
  )
}

export default VersionSelector
