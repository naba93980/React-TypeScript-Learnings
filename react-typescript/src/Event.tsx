import './App.css';
import Button from './components/Button';
import { Input } from './components/Input';

export default function Event() {
  return (
    <div className='App'>
      <Button handleClick={()=>console.log('Button clicked')}/>
      <Input handleChange={(e)=>console.log(e)}/>
    </div>
  )
}
