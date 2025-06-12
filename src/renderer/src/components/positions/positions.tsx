import styles from './positions.module.css'
import { NavLink } from 'react-router'
import { Outlet } from 'react-router'

export const Positions = (): React.JSX.Element => {
  return (
    <main>
      <div className={styles.mainContainer}>
        <div className={styles.nav}>
          <div className={styles.nav2}>
            <NavLink to="/">Menu</NavLink>
            <input placeholder="Artículo-Cuarto-Rack" type="text" />
          </div>
        </div>
        <Outlet />
      </div>
    </main>
  )
}
