import { Name } from '../types/Person.types';

type PersonListProps = {
    names: Name[]
}

export default function PersonList(props: PersonListProps) {
    return (
        <div>
            {props.names.map(name => {
                return (
                    <div key={name.first}>
                        <h3>{name.first} {name.last}</h3>
                    </div>
                )
            })}
        </div>
    )
}
