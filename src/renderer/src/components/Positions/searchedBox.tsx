import styles from './searchedBox.module.css'

interface SearchedBoxProps {
  children?: React.FC[]
}

export const SearchedBox = ({ children }: SearchedBoxProps): React.JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.prueba}>
        <div className={styles.codes}>
          <span className={styles.mainCode}>BOM0015</span>
          <span className={styles.secondCode}>fix-n-342</span>
        </div>
        <span className={styles.description}>La bomba fix está bien perrona hola</span>
      </div>
      {children ? children.map((Child, i) => <Child key={i} />) : <></>}
    </div>
  )
}
