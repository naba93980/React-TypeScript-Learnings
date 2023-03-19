export type ProfileProps = {
    name: string
}

export default function Profile({ name }: ProfileProps) {
    return (
        <div>
            <p>{name}</p>
        </div>
    )
}
