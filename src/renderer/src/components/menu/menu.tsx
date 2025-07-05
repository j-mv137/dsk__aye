import { MenuItem } from './MenuItems/menuItem'
import styles from './menu.module.css'

import imgLupa from '../../assets/images/Menu/MenuItems/lupa1.png'

export const Menu = (): React.JSX.Element => {
  return (
    <div className={styles.menuItems}>
      <MenuItem to="positions" imgPath={imgLupa} title="Búsqueda de Artículos" description="" />
      <MenuItem to="orders" imgPath={''} title="Búsqueda de Artículos" description="" />
    </div>
  )
}
