import styles from './input.module.css'

export const Input = ({
  className,
  ...props
}: React.ComponentProps<'input'>): React.JSX.Element => {
  return <input {...props} className={`${styles.searchInput}  ${className}`} />
}
