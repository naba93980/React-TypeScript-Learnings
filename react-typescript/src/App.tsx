import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import { Counter } from './components/class/Counter';
import { Private } from './components/auth/Private';
import Profile from './components/auth/Profile';
import Logger from './components/generics/Logger';
import { RandomNumber } from './components/restriction/RandomNumber';
import { Toast } from './components/templateLiterals/Toast';
import CustomComponent from './components/extractProps/CustomComponent';

function App() {

  const personName = {
    first: 'Nabajyoti',
    last: 'Modak'
  }

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne'
    },
    {
      first: 'Clark',
      last: 'Kent'
    },
    {
      first: 'Princess',
      last: 'Diana'
    }
  ]

  return (
    <div>
      <Greet name="naba" isLoggedIn={true} />
      <Person name={personName} />
      <PersonList names={nameList} />
      <Counter message=' Hello Nabajyoti ' />
      <Private isLoggedIn={true} Component={Profile}/>
      <Logger/>
      <RandomNumber value={50} isNegative />
      <Toast position='center-bottom'/>
      <CustomComponent isLoggedIn messageCount={10} name='naba'/>
    </div>
  );
}

export default App;
