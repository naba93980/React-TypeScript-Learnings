type ButtonProps = {
    handleClick : React.MouseEventHandler<HTMLButtonElement>
}

export default function Button(props: ButtonProps) {
  return (
    <div>
      <button onClick={props.handleClick}>click</button>
    </div>
  )
}