type OscarProps<T> = {
    children: T
}

export default function Oscar(props: OscarProps<React.ReactNode>) {
  return (
    <div>
      {props.children}
    </div>
  )
}
