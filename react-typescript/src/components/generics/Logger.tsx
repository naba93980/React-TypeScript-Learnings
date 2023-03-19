import { List } from './List'

export default function Logger() {
  return (
    <div>
      <List items={['batman','superman','wonder woman']} onClick={(item)=>console.log(item)}/>
      <List items={[1,2,3,4]} onClick={(item)=>console.log(item)}/>
    </div>
  )
}
