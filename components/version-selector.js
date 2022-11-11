import { useState } from 'react'
import ReactSelect from 'react-select'

const MOCK_VERSION = [
  'a',
  'b',
  'c',
]

const VersionSelector = () => {
  const [version, setVersion] = useState(null)
  return (
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
  )
}

export default VersionSelector
