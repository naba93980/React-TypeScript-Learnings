type GreetProps = {
    name: string,
    messageCount? : number,
    isLoggedIn : boolean
}

export default function Greet(props: GreetProps) {
    return (
        <div>
            {props.isLoggedIn && <h2>Welcome ....how are you {props.name}</h2>}
        </div>
    )
}

// { name: string }: GreetProps is also correct