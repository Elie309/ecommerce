import React, { useContext } from "react"

const AuthContext = React.createContext<boolean>(false)

export function AuthProvider({children, value}: {children: React.ReactNode, value: boolean}) {
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthValue(){
  return useContext(AuthContext)
}