import { PersonProps } from '../types/Person.types';

export default function Person(props: PersonProps) {
    return (
        <div>
            {props.name.first} {props.name.last}
        </div>
    )
}
