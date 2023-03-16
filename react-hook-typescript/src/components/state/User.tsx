import { useState } from 'react'

type AuthUser = {
  name: string
  email: string
}

export const User = () => {
    
//   const [user, setUser] = useState<AuthUser>({} as AuthUser)  // use it only if it is guranteed tht after initial load all the time user state will have AuthUser object as value
  const [user, setUser] = useState<AuthUser | null>(null)
  const handleLogin = () => {
    setUser({
      name: 'Nabajyoti Modak',
      email: 'naba93980@gmail.com'
    })
  }

  const handleLogout = () => {
    setUser(null)
  }
  return (
    <div>
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>User name is {user?.name}</div>
    </div>
  )
}