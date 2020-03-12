import React, { useState } from 'react'

const AuthContext = React.createContext()

function AuthProvider({ children }) {
  const [isLoggedIn, setLoggedIn] = useState(false)
  const login = () => setLoggedIn(true)
  const logout = () => setLoggedIn(false)

  return (
    <AuthContext.Provider value={{ login, logout, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  )
}

const useAuth = () => React.useContext(AuthContext)

export { AuthProvider, useAuth }
