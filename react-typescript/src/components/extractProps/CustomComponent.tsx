import Greet from '../Greet';
export default function CustomComponent(props: React.ComponentProps<typeof Greet>) {
    return (
        <div>
            {props.isLoggedIn}
            {props.messageCount}
            {props.name}
        </div>
    )
}
