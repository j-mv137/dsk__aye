import { MenuItem } from './MenuItems/menuItem'
import styles from './menu.module.css'

import imgLupa from '../../assets/images/Menu/MenuItems/lupa1.png'

export const Menu = (): React.JSX.Element => {
  return (
    <div className={styles.menuItems}>
      <MenuItem
        to="positions/front"
        imgPath={imgLupa}
        title="Búsqueda de Artículos"
        description=""
      />
      <MenuItem imgPath={imgLupa} title="Búsqueda de Artículos" description="" />
      <MenuItem imgPath={imgLupa} title="Búsqueda de Artículos" description="" />
      <MenuItem imgPath={imgLupa} title="Búsqueda de Artículos" description="" />
      <MenuItem imgPath={imgLupa} title="Búsqueda de Artículos" description="" />
      <MenuItem imgPath={imgLupa} title="Búsqueda de Artículos" description="" />
    </div>
  )
}
