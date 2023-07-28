import React, { useContext } from "react"

const AuthContext = React.createContext<IAuthValue>({
  authenticated: false,
  username: "",
  email: "",
  cardId: "",
})

export interface IAuthValue {
  authenticated: boolean;
  username: string;
  email: string;
  cardId: string;
}

export function AuthProvider({children, value}: {children: React.ReactNode, value: IAuthValue}) {
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthValue(){
  return useContext(AuthContext)
}