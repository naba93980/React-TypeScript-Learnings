type name = {
    first: string,
    last: string
}

type PersonListProps = {
    names: name[]
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
