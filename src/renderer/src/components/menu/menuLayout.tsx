import { Outlet, Link } from 'react-router'
import styles from './menuLayout.module.css'

export const MenuLayout = (): React.JSX.Element => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.background} />
      <div className={styles.secondContainter}>
        <span className={styles.aye}>AGUA Y ENERGÍA</span>
        <Link to="/" className={styles.link}>
          Volver al menú
        </Link>
      </div>

      <Outlet />
    </div>
  )
}
