import './App.css';
import { Box } from './components/context/Box';
import { ThemeContextProvider } from './components/context/ThemeContext';
import { UserContextProvider } from './components/context/UserContext';
import { LoggedIn } from './components/state/LoggedIn';
import { User } from './components/state/User';

function App() {
  return (
    <div className="App">
      <LoggedIn />
      <User />
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>
      <UserContextProvider>
        <User />
      </UserContextProvider>
    </div>
  );
}

export default App;
