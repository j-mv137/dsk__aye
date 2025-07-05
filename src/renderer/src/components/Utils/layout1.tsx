import styles from './layout1.module.css'

export const ContainerDown = ({ children }: { children: React.JSX.Element }): React.JSX.Element => {
  return <div className={styles.mainContainer}>{children}</div>
}
