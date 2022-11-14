import { useState, useEffect, createContext } from 'react'
// import Cookies from 'js-cookie'
import { getOrSetUser } from '../lib/api'

const AuthContext = createContext()

// TODO: add cookie or local storage support for maintaining "logged in" state via username
// export const getCurrentUsername = () => {
//   return Cookies.get('USER') ?? null
// }
//
// export const setCurrentUsername = name => {
//   Cookies.set('USER', name)
// }

function AuthProvider({ children }) {
  // NOTE: real auth could be handled here
  const [username, setUsername] = useState(null)
  const [user, setUser] = useState(null)

  useEffect(() => {
    const setUserDetails = async () => {
      const fetchedUser = await getOrSetUser(username)
      console.log('> fetchedUser', fetchedUser)
      setUser(fetchedUser)
    }

    setUserDetails()
  }, [username])

  console.log('> user', user)

  return (
    <AuthContext.Provider
      value={{
        username,
        setUsername,
        user,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export { AuthProvider, AuthContext }
