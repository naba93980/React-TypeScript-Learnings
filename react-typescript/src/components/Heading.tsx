type HeadingProps<T> = {
    children: T
}

export default function Heading(props: HeadingProps<string>) {
  return (
    <div>
      <h2>{props.children}</h2>
    </div>
  )
}

