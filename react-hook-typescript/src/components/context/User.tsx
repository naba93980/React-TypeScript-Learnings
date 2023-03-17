import { UserContext } from './UserContext';
import { useContext } from 'react';

export const User = () => {

    const { user, setUser } = useContext(UserContext)

    const handleLogin = () => {
        setUser({ name: "naba", email: "naba93980@gmail.com" })
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