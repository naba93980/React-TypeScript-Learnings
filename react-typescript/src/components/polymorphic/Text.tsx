type TextOwnProps<C extends React.ElementType> = {
    as?: C
    size?: 'sm' | 'md' | 'lg',
    color?: 'primary' | 'secondary'
    children: React.ReactNode
}

type TextProps<C extends React.ElementType> = TextOwnProps<C> & Omit<React.ComponentProps<C>, keyof TextOwnProps<C>>  // Omit removes the common props from the React.ComponentProps<C>

export const Text = <C extends React.ElementType>({ as, size, color, children }: TextProps<C>) => {
    let Component = as || 'div'
    return <Component className={`class-with-${size}-${color}`}>{children}</Component>
} 